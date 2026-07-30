// Module ID: 13417
// Function ID: 13418
// Dependencies: [13360, 13380]

// Module 13417
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = require("call")(prototype, "name");
let tmp2 = tmp;
if (tmp) {
  tmp2 = "something" === function something() {

  }.name;
}
let tmp3 = tmp;
if (tmp) {
  const _module = require("getOwnPropertyDescriptor");
  let tmp5 = !_module;
  if (_module) {
    tmp5 = require("getOwnPropertyDescriptor") && getOwnPropertyDescriptor(prototype, "name").configurable;
    const tmp6 = require("getOwnPropertyDescriptor") && getOwnPropertyDescriptor(prototype, "name").configurable;
  }
  tmp3 = tmp5;
}

export default { EXISTS: tmp, PROPER: tmp2, CONFIGURABLE: tmp3 };
