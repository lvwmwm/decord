// Module ID: 133
// Function ID: 2180
// Name: NodeList
// Dependencies: [6, 7, 99, 100, 131, 129]
// Exports: createNodeList

// Module 133 (NodeList)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import setPlatformObject from "setPlatformObject";

const require = arg1;
let closure_5 = require("_classPrivateFieldKey")("length");
let tmp2 = (() => {
  class NodeList {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, NodeList);
      definePropertyResult = Object.defineProperty(this, outer1_5, { writable: true, value: undefined });
      num = 0;
      if (0 < arg0.length) {
        do {
          _Object = Object;
          obj = {};
          obj.value = arg0[num];
          obj.writable = false;
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
  const items = [obj, , , , , , ];
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
    key: "entries",
    value: function entries() {
      return NodeList(outer1_1[4]).createEntriesIterator(this);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "forEach",
    value: function forEach(call) {
      const self = this;
      let num = 0;
      if (0 < outer1_4(this, outer1_5)[outer1_5]) {
        do {
          if (null == arg1) {
            let tmp6 = call(self[num], num, self);
          } else {
            let tmp = call;
            let tmp2 = arg1;
            let tmp3 = num;
            let tmp4 = self;
            let callResult = call.call(arg1, self[num], num, self);
          }
          num = num + 1;
          let tmp7 = outer1_4;
          let tmp8 = outer1_5;
        } while (num < outer1_4(self, outer1_5)[outer1_5]);
      }
    }
  };
  items[4] = {
    key: "keys",
    value: function keys() {
      return NodeList(outer1_1[4]).createKeyIterator(this);
    }
  };
  items[5] = {
    key: "values",
    value: function values() {
      return NodeList(outer1_1[4]).createValueIterator(this);
    }
  };
  items[6] = {
    key: Symbol.iterator,
    value() {
      return NodeList(outer1_1[4]).createValueIterator(this);
    }
  };
  return callback(NodeList, items);
})();
let closure_6 = tmp2;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export const createNodeList = function createNodeList(arg0) {
  return new closure_6(arg0);
};
