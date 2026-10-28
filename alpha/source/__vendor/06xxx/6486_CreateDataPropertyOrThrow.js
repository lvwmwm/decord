// Module ID: 6486
// Function ID: 6487
// Name: CreateDataPropertyOrThrow
// Dependencies: [6425, 1305, 6472, 6487]

// Module 6486 (CreateDataPropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6425 */;
import isPropertyKey from "isPropertyKey" /* 6472 */;
import CreateDataProperty from "CreateDataProperty" /* 6487 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1305("unable to create data property");
        throw tmp9;
      }
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
