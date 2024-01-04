import { type SchemaTypeDefinition } from "sanity";
import imageWithAlt from "./schemas/imageWithAlt";
import blockContent from "./schemas/blockContent";
import tag from "./schemas/tag";
import page from "./schemas/page";
import post from "./schemas/post";
import psyHelp from "./schemas/psyHelp";
import therapy from "./schemas/therapy";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, blockContent, imageWithAlt, psyHelp, therapy, page],
};
