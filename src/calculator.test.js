import calculator from "./calculator";

test("add(1,2) ---> 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add(1.0,2.0) ---> 3.0", () => {
  expect(calculator.add(1.0, 2.0)).toBeCloseTo(3.0);
});

test("subtract(1,2) ---> -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("subtract(1.0,2.0) ---> -1.0", () => {
  expect(calculator.subtract(1.0, 2.0)).toBeCloseTo(-1.0);
});

test("10 divide by 2 ---> 5.0", () => {
  expect(calculator.divide(10, 2)).toBeCloseTo(5.0);
});

test("10 divide by 0 --> Now Allowed", () => {
  expect(calculator.divide(10, 0)).toBe("division by zero is not allowed");
});

test("10*2 ---> 20", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("2.3*2 ---> 4.6", () => {
  expect(calculator.multiply(2.3, 2)).toBeCloseTo(4.6);
});
