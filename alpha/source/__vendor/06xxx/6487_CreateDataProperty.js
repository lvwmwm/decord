// Module ID: 6487
// Function ID: 6488
// Name: CreateDataProperty
// Dependencies: [6425, 1305, 6472, 6488]

// Module 6487 (CreateDataProperty)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6425 */;
import isPropertyKey from "isPropertyKey" /* 6472 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6488 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": __Value__, "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
