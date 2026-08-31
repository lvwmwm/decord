// Module ID: 4776
// Function ID: 4777
// Name: Get
// Dependencies: [4730, 541, 4777, 575]

// Module 4776 (Get)
import isObject from "isObject" /* 4730 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4777)(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = tmp(541);
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + tmp(575)(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
