import type { GetServerSideProps } from "next";
import path from "path";
import { getFiles, getFolders } from "../lib/folder";
import RootFolders from "../components/root";
import { Props } from "../components/folder";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pathname = context.req.url ?? "/";
  const folder = path.basename(pathname);
  return {
    props: {
      folders: getFolders(folder),
      files: getFiles(folder),
    },
  };
};

const Root = ({ folders, files }: Props) => {
  return <RootFolders folders={folders} files={files} />;
};

export default Root;
