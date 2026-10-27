// Module ID: 5968
// Function ID: 5969
// Name: CreateDataPropertyOrThrow
// Dependencies: [5907, 1308, 5954, 5969]

// Module 5968 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 5907 */;
import isPropertyKey from "isPropertyKey" /* 5954 */;
import CreateDataProperty from "CreateDataProperty" /* 5969 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1308("unable to create data property");
        throw tmp9;
      }
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
