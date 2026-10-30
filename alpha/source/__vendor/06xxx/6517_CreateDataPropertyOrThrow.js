// Module ID: 6517
// Function ID: 6518
// Name: CreateDataPropertyOrThrow
// Dependencies: [6456, 1294, 6503, 6518]

// Module 6517 (CreateDataPropertyOrThrow)
import _mod1294 from "module_1294" /* 1294 */;
import isObject from "isObject" /* 6456 */;
import isPropertyKey from "isPropertyKey" /* 6503 */;
import CreateDataProperty from "CreateDataProperty" /* 6518 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1294("unable to create data property");
        throw tmp9;
      }
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
