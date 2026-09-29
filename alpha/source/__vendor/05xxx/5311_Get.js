// Module ID: 5311
// Function ID: 5312
// Name: Get
// Dependencies: [5265, 1282, 5312, 1316]

// Module 5311 (Get)
import _mod5265 from "module_5265" /* 5265 */;


export default function Get(arg0, arg1) {
  if (_mod5265(arg0)) {
    if (tmp(5312)(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new tmp(1282)("Assertion failed: P is not a Property Key, got " + tmp(1316)(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
