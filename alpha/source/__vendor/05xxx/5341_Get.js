// Module ID: 5341
// Function ID: 5342
// Name: Get
// Dependencies: [5295, 1282, 5342, 1316]

// Module 5341 (Get)
import _mod5295 from "module_5295" /* 5295 */;


export default function Get(arg0, arg1) {
  if (_mod5295(arg0)) {
    if (tmp(5342)(arg1)) {
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
