// Module ID: 13343
// Function ID: 102106
// Dependencies: [13286, 13306]

// Module 13343
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
  let tmp4 = !require("getOwnPropertyDescriptor");
  if (!tmp4) {
    tmp4 = require("getOwnPropertyDescriptor") && getOwnPropertyDescriptor(prototype, "name").configurable;
    const tmp5 = require("getOwnPropertyDescriptor") && getOwnPropertyDescriptor(prototype, "name").configurable;
  }
  tmp3 = tmp4;
}
const obj = { EXISTS: tmp, PROPER: tmp2, CONFIGURABLE: tmp3 };

export default obj;
