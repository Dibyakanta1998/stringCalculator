const calculator = require("./calculator");

test("empty string returns 0", () => {
  expect(calculator.add("")).toBe(0);
});

test("single number returns the number itself", () => {
  expect(calculator.add("1")).toBe(1);
});

test("two numbers return their sum", () => {
  expect(calculator.add("1,5")).toBe(6);
});

test("multiple numbers return their sum", () => {
  expect(calculator.add("1,2,3")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(calculator.add("1\n2,3")).toBe(6);
});
