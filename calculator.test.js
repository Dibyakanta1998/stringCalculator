const calculator = require("./calculator");

test("empty string returns 0", () => {
  expect(calculator.add("")).toBe(0);
});

test('single number returns the number itself', () => {
    expect(calculator.add("1")).toBe(1);
  });