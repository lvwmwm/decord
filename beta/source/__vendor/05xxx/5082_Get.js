// Module ID: 5082
// Function ID: 5083
// Name: Get
// Dependencies: [5036, 1282, 5083, 1316]

// Module 5082 (Get)
import _mod5036 from "module_5036" /* 5036 */;


export default function Get(arg0, arg1) {
  if (_mod5036(arg0)) {
    if (tmp(5083)(arg1)) {
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
