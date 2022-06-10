import Head from "next/head";
import { Props } from "./folder";

const RootFolders = ({ folders, files }: Props) => {
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
              className="flex flex-col items-center justify-center bg-green-200 px-5 py-2 mb-4 rounded-md"
            >
              <a href={`/root/${f}`}>{f}</a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-center justify-center">
          {files.map((f) => (
            <li
              key={f}
              className="flex flex-col items-center justify-center bg-blue-200 px-5 py-2 mb-4 rounded-md"
            >
              <p> The name of the file is {f}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default RootFolders;
