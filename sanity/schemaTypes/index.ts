import { type SchemaTypeDefinition } from "sanity";
import post from "./post";
import siteSettings from "./siteSettings";
import comment from "./comment";
import message from "./message";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, siteSettings, comment, message],
};
