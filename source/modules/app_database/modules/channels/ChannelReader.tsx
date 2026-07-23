// Module ID: 1902
// Function ID: 21354
// Name: ChannelReader
// Dependencies: [5, 6, 7, 3, 1882, 2]

// Module 1902 (ChannelReader)
import set from "set";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import importDefaultResult from "timestamp";

importDefaultResult = new importDefaultResult("ChannelReader");
const tmp4 = (() => {
  class ChannelReader {
    constructor() {
      tmp = outer1_3(this, ChannelReader);
      return;
    }
  }
  let obj = {
    key: "getSync",
    value(arg0, arg1) {
      const nowResult = performance.now();
      const obj = callback(1882);
      const manySyncUnsafe = callback(1882).channels(arg0).getManySyncUnsafe(arg1);
      const diff = performance.now() - nowResult;
      outer1_5.log("synchronously loaded in " + diff + "ms (guild: " + arg1 + ", channels: " + manySyncUnsafe.length + ")");
      const items = [manySyncUnsafe, diff];
      return items;
    }
  };
  let items = [obj, , ];
  obj = { key: "getAsync" };
  let closure_1 = ChannelReader(async (arg0, arg1) => {
    const nowResult = performance.now();
    const obj = callback(table[4]);
    const arr = yield callback(table[4]).channels(arg0).getMany(arg1);
    outer2_5.verbose("loaded in " + performance.now() - nowResult + "ms (guild: " + arg1 + ", channels: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAsync() {
    return dependencyMap(...arguments);
  };
  items[1] = obj;
  obj = { key: "getGuildIds" };
  let closure_0 = ChannelReader(async () => {
    const channelsResult = callback(table[4]).channels();
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
    const obj = callback(table[4]);
    obj2 = channelsResult;
  });
  obj.value = function getGuildIds() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback(ChannelReader, null, items);
})();
const result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/channels/ChannelReader.tsx");

export default tmp4;
