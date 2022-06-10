import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import path from "path";

import { getFolders, getFiles } from "../lib/folder";

const explorer_folder = "explorer";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      folders: getFolders(explorer_folder),
      files: getFiles(explorer_folder),
    },
  };
};

export type Props = {
  folders: string[];
  files: string[];
};

const Folder = ({ folders, files }: Props) => {
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

export default Folder;
