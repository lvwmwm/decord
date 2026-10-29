// Module ID: 6510
// Function ID: 6511
// Name: CreateDataPropertyOrThrow
// Dependencies: [6449, 1305, 6496, 6511]

// Module 6510 (CreateDataPropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6449 */;
import isPropertyKey from "isPropertyKey" /* 6496 */;
import CreateDataProperty from "CreateDataProperty" /* 6511 */;


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
