// Module ID: 4808
// Function ID: 4809
// Name: Get
// Dependencies: [4762, 538, 4809, 572]

// Module 4808 (Get)
import isObject from "isObject" /* 4762 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4809)(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = tmp(538);
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + tmp(572)(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
