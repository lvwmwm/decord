// Module ID: 5712
// Function ID: 5713
// Name: CreateDataPropertyOrThrow
// Dependencies: [5651, 1306, 5698, 5713]

// Module 5712 (CreateDataPropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5651 */;
import isPropertyKey from "isPropertyKey" /* 5698 */;
import CreateDataProperty from "CreateDataProperty" /* 5713 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1306("unable to create data property");
        throw tmp9;
      }
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
