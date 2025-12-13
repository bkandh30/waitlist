import { beforeAll, afterAll } from "vitest";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import fs from "fs";

const TEST_DB_PATH = "test.sqlite";

beforeAll(() => {
	if (fs.existsSync(TEST_DB_PATH)) {
		fs.unlinkSync(TEST_DB_PATH);
	}

	const sqlite = new Database(TEST_DB_PATH);
	const db = drizzle(sqlite);
	console.log("Test data database created");
	migrate(db, { migrationsFolder: "./src/server/db/migrations" });
	sqlite.close();
	console.log("Test data database migrated");
});

afterAll(() => {
	if (fs.existsSync(TEST_DB_PATH)) {
		fs.unlinkSync(TEST_DB_PATH);
	}
	console.log("Test database destroyed");
})