// Module ID: 5161
// Function ID: 5162
// Name: CreateDataProperty
// Dependencies: [5099, 1282, 5146, 5162]

// Module 5161 (CreateDataProperty)
import _mod1282 from "module_1282" /* 1282 */;
import isObject from "isObject" /* 5099 */;
import isPropertyKey from "isPropertyKey" /* 5146 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5162 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": __Value__, "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
