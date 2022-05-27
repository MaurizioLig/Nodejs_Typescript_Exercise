import axios from "axios";
import config from "config";

export const getAllService = async () => {
  try {
    const result = await axios({
      method: "get",
      url: config.get("USER"),
    });
    return result.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
};
