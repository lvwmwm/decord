// Module ID: 5084
// Function ID: 5085
// Name: Get
// Dependencies: [5038, 1286, 5085, 1320]

// Module 5084 (Get)
import _mod5038 from "module_5038" /* 5038 */;


export default function Get(arg0, arg1) {
  if (_mod5038(arg0)) {
    if (tmp(5085)(arg1)) {
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
