const request = require("supertest");
const app = require("../App");

test("GET / responde correctamente", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain("Hola CI/CD");
});
