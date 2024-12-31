import supertest from "supertest";
// import { App } from "supertest/types";

const app = ""

describe("Foo bar", () => {
  it("SHould return foo bar", async () => {
    const { status } = await supertest(app).get("/foobar");
    const body = {};
    expect(status).toBe(200)
    expect(body).toBe({})
  })
})