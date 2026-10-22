// Module ID: 6437
// Function ID: 6438
// Name: CreateDataProperty
// Dependencies: [6375, 1308, 6422, 6438]

// Module 6437 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 6375 */;
import isPropertyKey from "isPropertyKey" /* 6422 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6438 */;


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
