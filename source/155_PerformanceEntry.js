// Module ID: 155
// Function ID: 2423
// Name: PerformanceEntry
// Dependencies: []

// Module 155 (PerformanceEntry)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_3 = importDefaultResult("name");
let closure_4 = importDefaultResult("entryType");
let closure_5 = importDefaultResult("startTime");
let closure_6 = importDefaultResult("duration");
const tmp3 = () => {
  class PerformanceEntry {
    constructor(arg0) {
      tmp = PerformanceEntry(this, PerformanceEntry);
      definePropertyResult = Object.defineProperty(this, closure_3, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_4, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_5, { writable: true, value: undefined });
      definePropertyResult3 = Object.defineProperty(this, closure_6, { writable: true, value: undefined });
      ({ name: closure_2(undefined, this, closure_3)[closure_3], entryType: closure_2(undefined, this, closure_4)[closure_4], startTime: closure_2(undefined, this, closure_5)[closure_5], duration: closure_2(undefined, this, closure_6)[closure_6] } = arg0);
      return;
    }
  }
  let closure_0 = PerformanceEntry;
  let obj = {
    key: "name",
    get() {
      return callback(this, closure_3)[closure_3];
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "entryType",
    get() {
      return callback(this, closure_4)[closure_4];
    }
  };
  items[1] = obj;
  obj = {
    key: "startTime",
    get() {
      return callback(this, closure_5)[closure_5];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "duration",
    get() {
      return callback(this, closure_6)[closure_6];
    }
  };
  items[4] = {
    key: "toJSON",
    value: function toJSON() {
      return { name: callback(this, closure_3)[closure_3], entryType: callback(this, closure_4)[closure_4], startTime: callback(this, closure_5)[closure_5], duration: callback(this, closure_6)[closure_6] };
    }
  };
  return callback(PerformanceEntry, items);
}();
arg1(dependencyMap[4]).setPlatformObject(tmp3);

export const PerformanceEntry = tmp3;
