// Module ID: 5146
// Function ID: 5147
// Name: Get
// Dependencies: [5100, 1294, 5147, 1328]

// Module 5146 (Get)
import _mod1294 from "module_1294" /* 1294 */;
import inspect_ from "inspect_" /* 1328 */;
import isObject from "isObject" /* 5100 */;
import isPropertyKey from "isPropertyKey" /* 5147 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      const self3 = this;
      const self4 = this;
      const tmpResult = _mod1294;
      const tmpResult1 = new tmpResult("Assertion failed: P is not a Property Key, got " + inspect_(arg1));
      throw tmpResult1;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
