// Module ID: 13698
// Function ID: 13699
// Dependencies: [13641, 13661]

// Module 13698
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
