import fs from "fs";

export function getFolders(path: string): string[] {
  return fs
    .readdirSync(path)
    .map((name) => name)
    .filter((name) => {
      const stat = fs.statSync(`${path}/${name}`);
      return stat.isDirectory();
    });
}

export function getFiles(path: string): string[] {
  return fs
    .readdirSync(path)
    .map((name) => name)
    .filter((name) => {
      const stat = fs.statSync(`${path}/${name}`);
      return stat.isFile();
    });
}
