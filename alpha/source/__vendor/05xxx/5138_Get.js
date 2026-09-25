// Module ID: 5138
// Function ID: 5139
// Name: Get
// Dependencies: [5092, 1282, 5139, 1316]

// Module 5138 (Get)
import _mod5092 from "module_5092" /* 5092 */;


export default function Get(arg0, arg1) {
  if (_mod5092(arg0)) {
    if (tmp(5139)(arg1)) {
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
