// Module ID: 6436
// Function ID: 6437
// Name: CreateDataPropertyOrThrow
// Dependencies: [6375, 1308, 6422, 6437]

// Module 6436 (CreateDataPropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 6375 */;
import isPropertyKey from "isPropertyKey" /* 6422 */;
import CreateDataProperty from "CreateDataProperty" /* 6437 */;


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
