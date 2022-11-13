import { Entity, Fields } from "remult";
import BaseModel, { softDeletes } from "./BaseModel";

@Entity("users", {
  ...softDeletes,
  allowApiCrud: true,
})
export class User extends BaseModel {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  username = "";

  @Fields.string()
  password = "";

  @Fields.string()
  name = "";
}
