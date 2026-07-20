// Module ID: 1902
// Function ID: 21348
// Name: ChannelReader
// Dependencies: []

// Module 1902 (ChannelReader)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("ChannelReader");
const tmp4 = () => {
  class ChannelReader {
    constructor() {
      tmp = closure_3(this, ChannelReader);
      return;
    }
  }
  const callback = ChannelReader;
  let obj = {
    key: "getSync",
    value(arg0, arg1) {
      const nowResult = performance.now();
      const obj = callback(closure_1[4]);
      const manySyncUnsafe = callback(closure_1[4]).channels(arg0).getManySyncUnsafe(arg1);
      const diff = performance.now() - nowResult;
      closure_5.log("synchronously loaded in " + diff + "ms (guild: " + arg1 + ", channels: " + manySyncUnsafe.length + ")");
      const items = [manySyncUnsafe, diff];
      return items;
    }
  };
  const items = [obj, , ];
  obj = { key: "getAsync" };
  let closure_1 = callback(async (arg0, arg1) => {
    const nowResult = performance.now();
    const obj = callback(closure_1[4]);
    const arr = yield callback(closure_1[4]).channels(arg0).getMany(arg1);
    closure_5.verbose("loaded in " + performance.now() - nowResult + "ms (guild: " + arg1 + ", channels: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAsync() {
    return callback2(...arguments);
  };
  items[1] = obj;
  obj = { key: "getGuildIds" };
  let closure_0 = callback(async () => {
    const channelsResult = callback(closure_1[4]).channels();
    if (null == channelsResult) {
      const _Set2 = Set;
      const set = new Set();
      return set;
    } else {
      const tmp3 = yield obj2.getGuildIds();
      const _Set = Set;
      const set1 = new Set(null != tmp3 ? tmp3 : [].filter((arg0) => {
        let tmp = null !== arg0;
        if (tmp) {
          tmp = "string" === typeof arg0;
        }
        return tmp;
      }));
      return set1;
    }
    const obj = callback(closure_1[4]);
    const obj2 = channelsResult;
  });
  obj.value = function getGuildIds() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(ChannelReader, null, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_database/modules/channels/ChannelReader.tsx");

export default tmp4;
