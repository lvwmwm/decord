// Module ID: 5137
// Function ID: 5138
// Name: Get
// Dependencies: [5091, 1282, 5138, 1316]

// Module 5137 (Get)
import _mod5091 from "module_5091" /* 5091 */;


export default function Get(arg0, arg1) {
  if (_mod5091(arg0)) {
    if (tmp(5138)(arg1)) {
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
