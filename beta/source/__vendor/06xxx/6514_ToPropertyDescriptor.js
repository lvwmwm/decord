// Module ID: 6514
// Function ID: 6515
// Name: ToPropertyDescriptor
// Dependencies: [6462, 1293, 1325, 6515, 6497]

// Module 6514 (ToPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import bind from "bind" /* 1325 */;
import isObject from "isObject" /* 6462 */;
import _mod6497 from "module_6497" /* 6497 */;
import ToBoolean from "ToBoolean" /* 6515 */;


export default function ToPropertyDescriptor(enumerable) {
  if (isObject(enumerable)) {
    const obj = {};
    if (bind(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = ToBoolean(enumerable.enumerable);
    }
    if (bind(enumerable, "configurable")) {
      obj["[[Configurable]]"] = ToBoolean(enumerable.configurable);
    }
    if (bind(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (bind(enumerable, "writable")) {
      obj["[[Writable]]"] = ToBoolean(enumerable.writable);
    }
    if (bind(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!_mod6497(get)) {
          const self3 = this;
          const self4 = this;
          const tmp5 = new _mod1293("getter must be a function");
          throw tmp5;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (bind(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod6497(enumerable.set)) {
          const self5 = this;
          const self6 = this;
          const tmp7 = new _mod1293("setter must be a function");
          throw tmp7;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (bind(obj, "[[Get]]")) {
      const self7 = this;
      const self8 = this;
      const tmp9 = new _mod1293("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp9;
    }
    return obj;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("ToPropertyDescriptor requires an object");
    throw tmp3;
  }
};
