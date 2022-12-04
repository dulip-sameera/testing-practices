"use strict";

var _calculator = _interopRequireDefault(require("./calculator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test("add(1,2) ---> 3", function () {
  expect(_calculator["default"].add(1, 2)).toBe(3);
});
test("add(1.0,2.0) ---> 3.0", function () {
  expect(_calculator["default"].add(1.0, 2.0)).toBeCloseTo(3.0);
});
test("subtract(1,2) ---> -1", function () {
  expect(_calculator["default"].subtract(1, 2)).toBe(-1);
});
test("subtract(1.0,2.0) ---> -1.0", function () {
  expect(_calculator["default"].subtract(1.0, 2.0)).toBeCloseTo(-1.0);
});
test("10 divide by 2 ---> 5.0", function () {
  expect(_calculator["default"].divide(10, 2)).toBeCloseTo(5.0);
});
test("10 divide by 0 --> Now Allowed", function () {
  expect(_calculator["default"].divide(10, 0)).toBe("division by zero is not allowed");
});
test("10*2 ---> 20", function () {
  expect(_calculator["default"].multiply(10, 2)).toBe(20);
});
test("2.3*2 ---> 4.6", function () {
  expect(_calculator["default"].multiply(2.3, 2)).toBeCloseTo(4.6);
});