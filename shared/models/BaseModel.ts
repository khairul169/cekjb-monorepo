import { Fields } from "remult";

export const softDeletes = {
  backendPrefilter: () => ({ deletedAt: "" }),
};

export default class BaseModel {
  @Fields.date({ defaultValue: () => new Date() })
  createdAt!: Date;

  @Fields.date()
  deletedAt?: Date;
}
