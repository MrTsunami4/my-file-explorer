import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { getFiles, getFolders } from "../../lib/folder";
import { Props } from "../folder";

// Get the folder name from the slug
const folder = () => {
  const router = useRouter();
  return router.pathname.split("/")[2];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      folders: getFolders(folder()),
      files: getFiles(folder()),
    },
  };
};

const FolderInside = ({ folders, files }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Folder page</title>
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <ul className="flex flex-col items-center justify-center">
          {folders.map((f) => (
            <li
              key={f}
              className="flex flex-col items-center justify-center bg-blue-200 px-5 py-2 mb-4 rounded-md"
            >
              <a href={`/folder/${f}`}>{f}</a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-center justify-center">
          {files.map((f) => (
            <li
              key={f}
              className="flex flex-col items-center justify-center bg-blue-200 px-5 py-2 mb-4 rounded-md"
            >
              <a href={`/file/${f}`}>{f}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default FolderInside;
