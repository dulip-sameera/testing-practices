"use strict";

var _capitalize = _interopRequireDefault(require("./capitalize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test("capital --> Capital", function () {
  expect((0, _capitalize["default"])("capital")).toBe("Capital");
});
test("CAPITAL --> Capital", function () {
  expect((0, _capitalize["default"])("CAPITAL")).toBe("Capital");
});
test("cAPITAL --> Capital", function () {
  expect((0, _capitalize["default"])("cAPITAL")).toBe("Capital");
});
test("CaPiTal --> Capital", function () {
  expect((0, _capitalize["default"])("CaPiTal")).toBe("Capital");
});
test("capital word --> Capital Word", function () {
  expect((0, _capitalize["default"])("capital word")).toBe("Capital Word");
});