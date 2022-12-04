"use strict";

var _reverseString = _interopRequireDefault(require("./reverseString"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test("word ---> drow", function () {
  expect((0, _reverseString["default"])("word")).toBe("drow");
});
test("Hello World ---> dlroW olleH", function () {
  expect((0, _reverseString["default"])("Hello World")).toBe("dlroW olleH");
});