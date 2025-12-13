import { describe, it, expect, beforeEach } from "vitest";
import { getTestDb } from "./get-test-db";
import { subscribers } from "../src/server/db/schema";
import { eq } from "drizzle-orm";

describe("Database", () => {
  it("should connect to test database", () => {
    const db = getTestDb();
    expect(db).toBeDefined();
  });
});

describe("Subscribers", () => {
  beforeEach(async () => {
    // Clean up subscribers table before each test
    const db = getTestDb();
    await db.delete(subscribers);
  });

  it("should insert a subscriber", async () => {
    const db = getTestDb();

    const [result] = await db
      .insert(subscribers)
      .values({
        email: "johndoe@mail.com",
        trafficSource: "organic",
        device: "mobile",
      })
      .returning();

    expect(result).toBeDefined();
    expect(result.email).toBe("johndoe@mail.com");
    expect(result.trafficSource).toBe("organic");
    expect(result.device).toBe("mobile");
  });

  it("should enforce unique email constraint", async () => {
    const db = getTestDb();

    await db.insert(subscribers).values({
      email: "duplicate@mail.com",
    });

    await expect(
      db.insert(subscribers).values({
        email: "duplicate@mail.com",
      }),
    ).rejects.toThrow();
  });

  it("should retrieve a subscriber by email", async () => {
    const db = getTestDb();

    await db.insert(subscribers).values({
      email: "find@mail.com",
    });

    const [found] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, "find@mail.com"));

    expect(found).toBeDefined();
    expect(found.email).toBe("find@mail.com");
  });

  it("should delete a subscriber", async () => {
    const db = getTestDb();

    await db.insert(subscribers).values({
      email: "delete@mail.com",
    });

    await db.delete(subscribers).where(eq(subscribers.email, "delete@mail.com"));

    const [found] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, "delete@mail.com"));

    expect(found).toBeUndefined();
  });
});