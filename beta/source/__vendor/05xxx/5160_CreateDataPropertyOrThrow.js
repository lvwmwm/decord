// Module ID: 5160
// Function ID: 5161
// Name: CreateDataPropertyOrThrow
// Dependencies: [5099, 1282, 5146, 5161]

// Module 5160 (CreateDataPropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import isObject from "isObject" /* 5099 */;
import isPropertyKey from "isPropertyKey" /* 5146 */;
import CreateDataProperty from "CreateDataProperty" /* 5161 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1282("unable to create data property");
        throw tmp9;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
