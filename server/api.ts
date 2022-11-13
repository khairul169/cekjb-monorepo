import { Remult } from "remult";
import { createRemultServer, GenericRequest } from "remult/server";
import models from "../shared/models";
import Seeder from "./seeder";

const onInit = async (remult: Remult) => {
  if (process.env.NODE_ENV === "development") {
    await Seeder(remult);
  }
};

export const api = createRemultServer({
  entities: Object.values(models),
  initApi: onInit,
});

export const getRemult = (context: GenericRequest) => api.getRemult(context);
