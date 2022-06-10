import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  file: File;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const path = req.url ?? "";
  const stat = fs.statSync(path);
  const file = fs.readFileSync(path);
}
