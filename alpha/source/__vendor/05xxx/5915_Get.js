// Module ID: 5915
// Function ID: 5916
// Name: Get
// Dependencies: [5869, 1308, 5916, 1342]

// Module 5915 (Get)
import _mod1308 from "module_1308" /* 1308 */;
import inspect_ from "inspect_" /* 1342 */;
import isObject from "isObject" /* 5869 */;
import isPropertyKey from "isPropertyKey" /* 5916 */;


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
