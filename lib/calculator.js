"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var calculator = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  divide: function divide(a, b) {
    if (b === 0) return "division by zero is not allowed";
    return a / b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  }
};
var _default = calculator;
exports["default"] = _default;