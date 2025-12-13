import { describe, it, expect, beforeEach } from "vitest";
import { getTestDb } from "./get-test-db";
import { subscribers } from "../src/server/db/schema";
import { eq, count } from "drizzle-orm";

describe("Database", () => {
  it("should connect to test database", () => {
    const db = getTestDb();
    expect(db).toBeDefined();
  });
});

describe("Seeded Data", () => {
  it("should have seeded subscribers", async () => {
    const db = getTestDb();
    const [result] = await db.select({ count: count() }).from(subscribers);
    expect(result.count).toBeGreaterThanOrEqual(10);
  });

  it("should have valid email format in seeded data", async () => {
    const db = getTestDb();
    const allSubscribers = await db.select().from(subscribers);

    allSubscribers.forEach((sub) => {
      expect(sub.email).toMatch(/.+@.+\..+/);
    });
  });
});

describe("Subscribers CRUD", () => {
  const testEmail = "crud-test@mail.com";

  beforeEach(async () => {
    const db = getTestDb();
    await db.delete(subscribers).where(eq(subscribers.email, testEmail));
  });

  it("should insert a subscriber", async () => {
    const db = getTestDb();

    const [result] = await db
      .insert(subscribers)
      .values({
        email: testEmail,
        trafficSource: "organic",
        device: "mobile",
      })
      .returning();

    expect(result).toBeDefined();
    expect(result.email).toBe(testEmail);
    expect(result.trafficSource).toBe("organic");
    expect(result.device).toBe("mobile");
  });

  it("should enforce unique email constraint", async () => {
    const db = getTestDb();

    await db.insert(subscribers).values({
      email: testEmail,
    });

    await expect(
      db.insert(subscribers).values({
        email: testEmail,
      }),
    ).rejects.toThrow();
  });

  it("should retrieve a subscriber by email", async () => {
    const db = getTestDb();

    await db.insert(subscribers).values({
      email: testEmail,
    });

    const [found] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, testEmail));

    expect(found).toBeDefined();
    expect(found.email).toBe(testEmail);
  });

  it("should delete a subscriber", async () => {
    const db = getTestDb();

    await db.insert(subscribers).values({
      email: testEmail,
    });

    await db.delete(subscribers).where(eq(subscribers.email, testEmail));

    const [found] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, testEmail));

    expect(found).toBeUndefined();
  });
});