// Module ID: 1892
// Function ID: 21142
// Name: Host
// Dependencies: []

// Module 1892 (Host)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const tmp2 = () => {
  class Host {
    constructor() {
      tmp = closure_3(this, Host);
      return;
    }
  }
  const dependencyMap = Host;
  let obj = {
    key: "open",
    value(arg0, arg1) {
      const callback = arg0;
      const Host = arg1;
      const Runtime = callback(Host[3]).Runtime;
      return Runtime.executeAsync("database_open", (arg0) => {
        let prop;
        const KV_RAW = arg0(arg1[4]).KV_RAW;
        const obj = { database: arg0 };
        if (null != arg1) {
          prop = arg1.invalidateDisabledHandles;
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
        const KV_RAW = arg0(closure_1[4]).KV_RAW;
        return KV_RAW.databaseDelete(arg0, { database: arg0 });
      });
    }
  };
  items[2] = obj;
  const obj1 = { key: "list" };
  let closure_0 = callback(async () => {
    const Runtime = callback(closure_1[3]).Runtime;
    return yield Runtime.executeAsync("database_list", (arg0) => {
      const KV_RAW = callback(closure_1[4]).KV_RAW;
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
        const KV_RAW = arg0(closure_1[4]).KV_RAW;
        return KV_RAW.databaseOptimize(arg0, { aggressive: arg0 });
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
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("../discord_common/js/packages/kv-storage/js/raw/Host.tsx");

export const Host = tmp2;
