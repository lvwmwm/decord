// Module ID: 6643
// Function ID: 6644
// Name: Get
// Dependencies: [6597, 1293, 6644, 1327]

// Module 6643 (Get)
import _mod1293 from "module_1293" /* 1293 */;
import inspect_ from "inspect_" /* 1327 */;
import isObject from "isObject" /* 6597 */;
import isPropertyKey from "isPropertyKey" /* 6644 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      const self3 = this;
      const self4 = this;
      const tmpResult = _mod1293;
      const tmpResult1 = new tmpResult("Assertion failed: P is not a Property Key, got " + inspect_(arg1));
      throw tmpResult1;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
