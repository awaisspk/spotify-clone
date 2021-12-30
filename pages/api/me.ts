import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../lib/auth";

export default validateRoute(
  (_req: NextApiRequest, res: NextApiResponse, user: any) => {
    res.json(user);
  }
);

