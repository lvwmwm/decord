// Module ID: 130
// Function ID: 2158
// Name: DOMRectList
// Dependencies: []
// Exports: createDOMRectList

// Module 130 (DOMRectList)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3])("length");
const tmp2 = () => {
  class DOMRectList {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, DOMRectList);
      definePropertyResult = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
      num = 0;
      if (0 < arg0.length) {
        do {
          _Object = Object;
          obj = { consumed: "y", ForcedColorsPreference: "isArray", MOBILE_NITRO_HOME_SETTINGS_BADGE: "Reflect", NOTIFICATION_WARNING: "container" };
          obj.value = arg0[num];
          definePropertyResult1 = Object.defineProperty(self, num, obj);
          num = num + 1;
          length = arg0.length;
        } while (num < length);
      }
      closure_4(self, closure_5)[closure_5] = arg0.length;
      return;
    }
  }
  const arg1 = DOMRectList;
  let obj = {
    key: "length",
    get() {
      return callback2(this, closure_5)[closure_5];
    }
  };
  const items = [obj, , ];
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
    key: Symbol.iterator,
    value() {
      return DOMRectList(closure_1[4]).createValueIterator(this);
    }
  };
  items[2] = obj;
  return callback(DOMRectList, items);
}();
arg1(dependencyMap[5]).setPlatformObject(tmp2);

export default tmp2;
export const createDOMRectList = function createDOMRectList(arg0) {
  return new tmp2(arg0);
};
