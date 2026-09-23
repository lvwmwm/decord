// Module ID: 5135
// Function ID: 5136
// Name: Get
// Dependencies: [5089, 1282, 5136, 1316]

// Module 5135 (Get)
import _mod5089 from "module_5089" /* 5089 */;


export default function Get(arg0, arg1) {
  if (_mod5089(arg0)) {
    if (tmp(5136)(arg1)) {
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
