// Module ID: 6518
// Function ID: 6519
// Name: CreateDataProperty
// Dependencies: [6456, 1294, 6503, 6519]

// Module 6518 (CreateDataProperty)
import _mod1294 from "module_1294" /* 1294 */;
import isObject from "isObject" /* 6456 */;
import isPropertyKey from "isPropertyKey" /* 6503 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6519 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": __Value__, "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1294("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
