// Module ID: 130
// Function ID: 2158
// Name: DOMRectList
// Dependencies: [6, 7, 99, 100, 131, 129]
// Exports: createDOMRectList

// Module 130 (DOMRectList)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import setPlatformObject from "setPlatformObject";

const require = arg1;
let closure_5 = require("_classPrivateFieldKey")("length");
const tmp2 = (() => {
  class DOMRectList {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, DOMRectList);
      definePropertyResult = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      num = 0;
      if (0 < arg0.length) {
        do {
          _Object = Object;
          obj = { value: null, enumerable: true, configurable: false, writable: false };
          obj.value = arg0[num];
          definePropertyResult1 = Object.defineProperty(self, num, obj);
          num = num + 1;
          length = arg0.length;
        } while (num < length);
      }
      outer1_4(self, outer1_5)[outer1_5] = arg0.length;
      return;
    }
  }
  let obj = {
    key: "length",
    get() {
      return outer1_4(this, outer1_5)[outer1_5];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "item",
    value: function item(arg0) {
      const self = this;
      if (arg0 >= 0) {
        if (arg0 < outer1_4(self, outer1_5)[outer1_5]) {
          return self[arg0];
        }
      }
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: Symbol.iterator,
    value() {
      return DOMRectList(outer1_1[4]).createValueIterator(this);
    }
  };
  items[2] = obj;
  return callback(DOMRectList, items);
})();
let closure_6 = tmp2;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export const createDOMRectList = function createDOMRectList(arg0) {
  return new closure_6(arg0);
};
