// Module ID: 4424
// Function ID: 38902
// Name: getEvalledConstructor
// Dependencies: [4425, 4426]

// Module 4424 (getEvalledConstructor)
import DefinePropertyOrThrow from "DefinePropertyOrThrow";

const tmp = require("getEvalledConstructor")("%Reflect.construct%", true);
let closure_0 = tmp;
let obj = {
  "[[Get]]": function Get() {

  }
};
DefinePropertyOrThrow({}, "", obj);
while (true) {
  let tmp4 = DefinePropertyOrThrow;
  if (!DefinePropertyOrThrow) {
    break;
  } else if (!tmp) {
    break;
  } else {
    let closure_1 = {};
    obj = {};
    let tmp6 = DefinePropertyOrThrow;
    obj = {
      "[[Get]]": function Get() {
            throw closure_1;
          },
      "[[Enumerable]]": true
    };
    let str = "length";
    let _moduleResult1 = DefinePropertyOrThrow(obj, "length", obj);
    module.exports = function IsConstructor(arg0) {

    };
  }
  let tmp5 = module;
  module.exports = function IsConstructor(arg0) {
    return "function" === typeof arg0 && arg0.prototype;
  };
}
