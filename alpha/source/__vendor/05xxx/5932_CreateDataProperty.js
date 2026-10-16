// Module ID: 5932
// Function ID: 5933
// Name: CreateDataProperty
// Dependencies: [5870, 1308, 5917, 5933]

// Module 5932 (CreateDataProperty)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 5870 */;
import isPropertyKey from "isPropertyKey" /* 5917 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5933 */;


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
