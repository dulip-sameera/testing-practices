import capitalize from "./capitalize";

test("capital --> Capital", () => {
  expect(capitalize("capital")).toBe("Capital");
});

test("CAPITAL --> Capital", () => {
  expect(capitalize("CAPITAL")).toBe("Capital");
});

test("cAPITAL --> Capital", () => {
  expect(capitalize("cAPITAL")).toBe("Capital");
});

test("CaPiTal --> Capital", () => {
  expect(capitalize("CaPiTal")).toBe("Capital");
});

test("capital word --> Capital Word", () => {
  expect(capitalize("capital word")).toBe("Capital Word");
});
