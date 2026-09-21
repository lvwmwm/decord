// Module ID: 5052
// Function ID: 5053
// Name: Get
// Dependencies: [5006, 1286, 5053, 1320]

// Module 5052 (Get)
import _mod5006 from "module_5006" /* 5006 */;


export default function Get(arg0, arg1) {
  if (_mod5006(arg0)) {
    if (tmp(5053)(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new tmp(1286)("Assertion failed: P is not a Property Key, got " + tmp(1320)(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
