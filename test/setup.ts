import { beforeAll, afterAll } from "vitest";
import { seed } from "drizzle-seed";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { subscribers } from "../src/server/db/schema";
import fs from "fs";

const TEST_DB_PATH = "test.sqlite";

beforeAll(async () => {
  if (fs.existsSync(TEST_DB_PATH)) {
    fs.unlinkSync(TEST_DB_PATH);
  }

  const sqlite = new Database(TEST_DB_PATH);
  const db = drizzle(sqlite);
  console.log("Test database created");

  migrate(db, { migrationsFolder: "./src/server/db/migrations" });
  console.log("Test database migrated");

  await seed(db, { subscribers }, { count: 10 });
  console.log("Test database seeded with 10 subscribers");

  sqlite.close();
});

afterAll(() => {
  if (fs.existsSync(TEST_DB_PATH)) {
    fs.unlinkSync(TEST_DB_PATH);
  }
  console.log("Test database destroyed");
});