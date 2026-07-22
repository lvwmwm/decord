// Module ID: 132
// Function ID: 2172
// Name: HTMLCollection
// Dependencies: []
// Exports: createHTMLCollection

// Module 132 (HTMLCollection)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3])("length");
const tmp2 = () => {
  class HTMLCollection {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, HTMLCollection);
      definePropertyResult = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
      num = 0;
      if (0 < arg0.length) {
        do {
          _Object = Object;
          obj = { onDownloadProgress: 300000, GUILD_TAG_AVAILABLE_COACHMARK_V2: false, _setupIntegrations: 30, blurTargetViewNativeId: 2 };
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
  const arg1 = HTMLCollection;
  let obj = {
    key: "length",
    get() {
      return callback2(this, closure_5)[closure_5];
    }
  };
  const items = [obj, , , ];
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
    key: "namedItem",
    value: function namedItem(arg0) {
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: Symbol.iterator,
    value() {
      return HTMLCollection(closure_1[4]).createValueIterator(this);
    }
  };
  return callback(HTMLCollection, items);
}();
arg1(dependencyMap[5]).setPlatformObject(tmp2);

export default tmp2;
export const createHTMLCollection = function createHTMLCollection(items) {
  return new tmp2(items);
};
