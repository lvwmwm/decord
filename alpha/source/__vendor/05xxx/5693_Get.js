// Module ID: 5693
// Function ID: 5694
// Name: Get
// Dependencies: [5647, 1305, 5694, 1339]

// Module 5693 (Get)
import _mod1305 from "module_1305" /* 1305 */;
import inspect_ from "inspect_" /* 1339 */;
import isObject from "isObject" /* 5647 */;
import isPropertyKey from "isPropertyKey" /* 5694 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      const self3 = this;
      const self4 = this;
      const tmpResult = _mod1305;
      const tmpResult1 = new tmpResult("Assertion failed: P is not a Property Key, got " + inspect_(arg1));
      throw tmpResult1;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
