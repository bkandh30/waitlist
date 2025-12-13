import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "../src/server/db/schema";

export const getTestDb = () => {
  const sqlite = new Database("test.sqlite");
  return drizzle(sqlite, { schema });
};