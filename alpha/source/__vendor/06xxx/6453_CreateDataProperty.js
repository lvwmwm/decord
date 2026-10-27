// Module ID: 6453
// Function ID: 6454
// Name: CreateDataProperty
// Dependencies: [6391, 1305, 6438, 6454]

// Module 6453 (CreateDataProperty)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6391 */;
import isPropertyKey from "isPropertyKey" /* 6438 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 6454 */;


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
