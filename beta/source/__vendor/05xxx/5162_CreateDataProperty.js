// Module ID: 5162
// Function ID: 5163
// Name: CreateDataProperty
// Dependencies: [5100, 1294, 5147, 5163]

// Module 5162 (CreateDataProperty)
import _mod1294 from "module_1294" /* 1294 */;
import isObject from "isObject" /* 5100 */;
import isPropertyKey from "isPropertyKey" /* 5147 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5163 */;


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
