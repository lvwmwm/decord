// Module ID: 158
// Function ID: 2435
// Name: MemoryInfo
// Dependencies: []

// Module 158 (MemoryInfo)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_3 = importDefaultResult("jsHeapSizeLimit");
let closure_4 = importDefaultResult("totalJSHeapSize");
let closure_5 = importDefaultResult("usedJSHeapSize");
const tmp3 = () => {
  class MemoryInfo {
    constructor(arg0) {
      self = this;
      tmp = MemoryInfo(this, MemoryInfo);
      definePropertyResult = Object.defineProperty(this, closure_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
      if (null != arg0) {
        tmp5 = closure_2;
        tmp6 = closure_3;
        closure_2(self, closure_3)[closure_3] = arg0.jsHeapSizeLimit;
        tmp7 = closure_4;
        closure_2(self, closure_4)[closure_4] = arg0.totalJSHeapSize;
        tmp8 = closure_5;
        closure_2(self, closure_5)[closure_5] = arg0.usedJSHeapSize;
      }
      return;
    }
  }
  let closure_0 = MemoryInfo;
  let obj = {
    key: "jsHeapSizeLimit",
    get() {
      return callback(this, closure_3)[closure_3];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "totalJSHeapSize",
    get() {
      return callback(this, closure_4)[closure_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "usedJSHeapSize",
    get() {
      return callback(this, closure_5)[closure_5];
    }
  };
  items[2] = obj;
  return callback(MemoryInfo, items);
}();
arg1(dependencyMap[4]).setPlatformObject(tmp3);

export default tmp3;
