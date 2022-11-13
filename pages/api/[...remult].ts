import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../server/api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const remultResult = await api.handle(req, res);
    if (!remultResult) {
      return res
        .status(404)
        .json({ success: false, message: "Route Not Found!" });
    }
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err instanceof Error ? err.message : "Server error!",
    });
  }
};

export default handler;
