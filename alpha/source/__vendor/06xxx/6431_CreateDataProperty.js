// Module ID: 6431
// Function ID: 6432
// Name: CreateDataProperty
// Dependencies: [6369, 1308, 6416, 6432]

// Module 6431 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 6369 */;
import isPropertyKey from "isPropertyKey" /* 6416 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6432 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": __Value__, "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
