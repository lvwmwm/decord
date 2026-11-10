// Module ID: 6524
// Function ID: 6525
// Name: CreateDataProperty
// Dependencies: [6462, 1293, 6509, 6525]

// Module 6524 (CreateDataProperty)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 6462 */;
import isPropertyKey from "isPropertyKey" /* 6509 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6525 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": __Value__, "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
