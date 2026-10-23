// Module ID: 6440
// Function ID: 6441
// Name: ToPropertyDescriptor
// Dependencies: [6388, 1308, 1340, 6441, 6423]

// Module 6440 (ToPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import bind from "bind" /* 1340 */;
import isObject from "isObject" /* 6388 */;
import _mod6423 from "module_6423" /* 6423 */;
import ToBoolean from "ToBoolean" /* 6441 */;


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
        if (!_mod6423(get)) {
          const self3 = this;
          const self4 = this;
          const tmp5 = new _mod1308("getter must be a function");
          throw tmp5;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (bind(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod6423(enumerable.set)) {
          const self5 = this;
          const self6 = this;
          const tmp7 = new _mod1308("setter must be a function");
          throw tmp7;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (bind(obj, "[[Get]]")) {
      const self7 = this;
      const self8 = this;
      const tmp9 = new _mod1308("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp9;
    }
    return obj;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("ToPropertyDescriptor requires an object");
    throw tmp3;
  }
};
