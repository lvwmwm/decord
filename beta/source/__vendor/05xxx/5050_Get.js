// Module ID: 5050
// Function ID: 5051
// Name: Get
// Dependencies: [5004, 1282, 5051, 1316]

// Module 5050 (Get)
import _mod5004 from "module_5004" /* 5004 */;


export default function Get(arg0, arg1) {
  if (_mod5004(arg0)) {
    if (tmp(5051)(arg1)) {
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
