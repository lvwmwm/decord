// Module ID: 13354
// Function ID: 102233
// Dependencies: [13297, 13317]

// Module 13354
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
