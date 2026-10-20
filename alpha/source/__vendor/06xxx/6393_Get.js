// Module ID: 6393
// Function ID: 6394
// Name: Get
// Dependencies: [6347, 1308, 6394, 1342]

// Module 6393 (Get)
import _mod1308 from "module_1308" /* 1308 */;
import inspect_ from "inspect_" /* 1342 */;
import isObject from "isObject" /* 6347 */;
import isPropertyKey from "isPropertyKey" /* 6394 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      const self3 = this;
      const self4 = this;
      const tmpResult = _mod1308;
      const tmpResult1 = new tmpResult("Assertion failed: P is not a Property Key, got " + inspect_(arg1));
      throw tmpResult1;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
