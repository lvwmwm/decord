// Module ID: 133
// Function ID: 2180
// Name: NodeList
// Dependencies: []
// Exports: createNodeList

// Module 133 (NodeList)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3])("length");
const tmp2 = () => {
  class NodeList {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, NodeList);
      definePropertyResult = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
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
      closure_4(self, closure_5)[closure_5] = arg0.length;
      return;
    }
  }
  const arg1 = NodeList;
  let obj = {
    key: "length",
    get() {
      return callback2(this, closure_5)[closure_5];
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "item",
    value: function item(arg0) {
      const self = this;
      if (arg0 >= 0) {
        if (arg0 < callback2(self, closure_5)[closure_5]) {
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
      return NodeList(closure_1[4]).createEntriesIterator(this);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "forEach",
    value: function forEach(call) {
      const self = this;
      let num = 0;
      if (0 < callback2(this, closure_5)[closure_5]) {
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
          let tmp7 = closure_4;
          let tmp8 = closure_5;
        } while (num < closure_4(self, closure_5)[closure_5]);
      }
    }
  };
  items[4] = {
    key: "keys",
    value: function keys() {
      return NodeList(closure_1[4]).createKeyIterator(this);
    }
  };
  items[5] = {
    key: "values",
    value: function values() {
      return NodeList(closure_1[4]).createValueIterator(this);
    }
  };
  items[6] = {
    key: Symbol.iterator,
    value() {
      return NodeList(closure_1[4]).createValueIterator(this);
    }
  };
  return callback(NodeList, items);
}();
arg1(dependencyMap[5]).setPlatformObject(tmp2);

export default tmp2;
export const createNodeList = function createNodeList(arg0) {
  return new tmp2(arg0);
};
