// Module ID: 5145
// Function ID: 5146
// Name: Get
// Dependencies: [5099, 1282, 5146, 1316]

// Module 5145 (Get)
import _mod1282 from "module_1282" /* 1282 */;
import inspect_ from "inspect_" /* 1316 */;
import isObject from "isObject" /* 5099 */;
import isPropertyKey from "isPropertyKey" /* 5146 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      const self3 = this;
      const self4 = this;
      const tmpResult = _mod1282;
      const tmpResult1 = new tmpResult("Assertion failed: P is not a Property Key, got " + inspect_(arg1));
      throw tmpResult1;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
