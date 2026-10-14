// Module ID: 5718
// Function ID: 5719
// Name: CreateDataProperty
// Dependencies: [5656, 1306, 5703, 5719]

// Module 5718 (CreateDataProperty)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5656 */;
import isPropertyKey from "isPropertyKey" /* 5703 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 5719 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": __Value__, "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
