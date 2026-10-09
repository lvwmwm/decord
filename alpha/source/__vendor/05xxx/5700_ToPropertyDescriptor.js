// Module ID: 5700
// Function ID: 5701
// Name: ToPropertyDescriptor
// Dependencies: [5648, 1306, 1338, 5701, 5683]

// Module 5700 (ToPropertyDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import bind from "bind" /* 1338 */;
import isObject from "isObject" /* 5648 */;
import _mod5683 from "module_5683" /* 5683 */;
import ToBoolean from "ToBoolean" /* 5701 */;


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
        if (!_mod5683(get)) {
          const self3 = this;
          const self4 = this;
          const tmp5 = new _mod1306("getter must be a function");
          throw tmp5;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (bind(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!_mod5683(enumerable.set)) {
          const self5 = this;
          const self6 = this;
          const tmp7 = new _mod1306("setter must be a function");
          throw tmp7;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (bind(obj, "[[Get]]")) {
      const self7 = this;
      const self8 = this;
      const tmp9 = new _mod1306("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp9;
    }
    return obj;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1306("ToPropertyDescriptor requires an object");
    throw tmp3;
  }
};
