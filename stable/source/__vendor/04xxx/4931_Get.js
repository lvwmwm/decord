// Module ID: 4931
// Function ID: 4932
// Name: Get
// Dependencies: [4885, 1281, 4932, 1315]

// Module 4931 (Get)
import _mod4885 from "module_4885" /* 4885 */;


export default function Get(arg0, arg1) {
  if (_mod4885(arg0)) {
    if (tmp(4932)(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new tmp(1281)("Assertion failed: P is not a Property Key, got " + tmp(1315)(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
