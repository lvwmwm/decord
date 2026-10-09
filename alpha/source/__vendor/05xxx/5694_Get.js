// Module ID: 5694
// Function ID: 5695
// Name: Get
// Dependencies: [5648, 1306, 5695, 1340]

// Module 5694 (Get)
import _mod1306 from "module_1306" /* 1306 */;
import inspect_ from "inspect_" /* 1340 */;
import isObject from "isObject" /* 5648 */;
import isPropertyKey from "isPropertyKey" /* 5695 */;


export default function Get(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg0[arg1];
    } else {
      const self3 = this;
      const self4 = this;
      const tmpResult = _mod1306;
      const tmpResult1 = new tmpResult("Assertion failed: P is not a Property Key, got " + inspect_(arg1));
      throw tmpResult1;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
