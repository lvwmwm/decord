// Module ID: 6661
// Function ID: 6662
// Name: CreateDataPropertyOrThrow
// Dependencies: [6600, 1293, 6647, 6662]

// Module 6661 (CreateDataPropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 6600 */;
import isPropertyKey from "isPropertyKey" /* 6647 */;
import CreateDataProperty from "CreateDataProperty" /* 6662 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1293("unable to create data property");
        throw tmp9;
      }
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
