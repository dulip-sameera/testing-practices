import reverseString from "./reverseString";

test("word ---> drow", () => {
  expect(reverseString("word")).toBe("drow");
});

test("Hello World ---> dlroW olleH", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});
