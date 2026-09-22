// Module ID: 5051
// Function ID: 5052
// Name: Get
// Dependencies: [5005, 1282, 5052, 1316]

// Module 5051 (Get)
import _mod5005 from "module_5005" /* 5005 */;


export default function Get(arg0, arg1) {
  if (_mod5005(arg0)) {
    if (tmp(5052)(arg1)) {
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
