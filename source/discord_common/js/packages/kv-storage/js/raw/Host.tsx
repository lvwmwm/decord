// Module ID: 1892
// Function ID: 21143
// Name: Host
// Dependencies: [5, 6, 7, 1891, 1884, 2]

// Module 1892 (Host)
import set from "set";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class Host {
    constructor() {
      tmp = outer1_3(this, Host);
      return;
    }
  }
  let obj = {
    key: "open",
    value(arg0, arg1) {
      const callback = arg0;
      let closure_1 = arg1;
      const Runtime = callback(Host[3]).Runtime;
      return Runtime.executeAsync("database_open", (arg0) => {
        let prop;
        const KV_RAW = callback(Host[4]).KV_RAW;
        const obj = { database: callback };
        if (null != obj) {
          prop = obj.invalidateDisabledHandles;
        }
        obj.invalidateDisabledHandles = null != prop && prop;
        return KV_RAW.databaseOpen(arg0, obj);
      });
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "openSyncUnsafe",
    value(database, invalidateDisabledHandles) {
      let prop;
      const KV_RAW = callback(Host[4]).KV_RAW;
      const obj = { database };
      if (null != invalidateDisabledHandles) {
        prop = invalidateDisabledHandles.invalidateDisabledHandles;
      }
      obj.invalidateDisabledHandles = null != prop && prop;
      return KV_RAW.databaseOpen(null, obj, { synchronous: true });
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value(arg0) {
      const callback = arg0;
      const Runtime = callback(Host[3]).Runtime;
      return Runtime.executeAsync("database_delete", (arg0) => {
        const KV_RAW = callback(Host[4]).KV_RAW;
        return KV_RAW.databaseDelete(arg0, { database: callback });
      });
    }
  };
  items[2] = obj;
  const obj1 = { key: "list" };
  let closure_0 = callback(async () => {
    const Runtime = callback(Host[3]).Runtime;
    return yield Runtime.executeAsync("database_list", (arg0) => {
      const KV_RAW = callback(Host[4]).KV_RAW;
      return KV_RAW.databaseList(arg0);
    }).map((data) => data.data);
  });
  obj1.value = function list() {
    return callback(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "optimize",
    value(arg0) {
      const callback = arg0;
      const Runtime = callback(Host[3]).Runtime;
      return Runtime.executeAsync("database_optimize", (arg0) => {
        const KV_RAW = callback(Host[4]).KV_RAW;
        return KV_RAW.databaseOptimize(arg0, { aggressive: callback });
      });
    }
  };
  items[5] = {
    key: "raise",
    value(arg0) {
      const KV_RAW = callback(Host[4]).KV_RAW;
      KV_RAW.raise(arg0);
    }
  };
  return callback2(Host, null, items);
})();
const result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Host.tsx");

export const Host = tmp2;
