// Module ID: 5145
// Function ID: 5146
// Name: Get
// Dependencies: [5099, 1282, 5146, 1316]

// Module 5145 (Get)
import _mod5099 from "module_5099" /* 5099 */;


export default function Get(arg0, arg1) {
  if (_mod5099(arg0)) {
    if (tmp(5146)(arg1)) {
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
