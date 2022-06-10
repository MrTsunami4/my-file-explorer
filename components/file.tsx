import fs from "fs";

function sendFile(pathname: string) {
  const stats = fs.statSync(pathname);
}

const File = (pathname: string) => {
  sendFile(pathname);
  return <div>{pathname}</div>;
};
export default File;
