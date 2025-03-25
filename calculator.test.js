const calculator = require("./calculator");

test("empty string returns 0", () => {
  expect(calculator.add("")).toBe(0);
});
