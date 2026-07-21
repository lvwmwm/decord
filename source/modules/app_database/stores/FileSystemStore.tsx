// Module ID: 6706
// Function ID: 52102
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6706 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("FileSystemStore");
let closure_9 = 10 * importDefault(dependencyMap[7]).Millis.MINUTE;
let tmp4 = (Store) => {
  class FileSystemStore {
    constructor() {
      self = this;
      tmp = closure_3(this, FileSystemStore);
      tmp2 = f52113;
      tmp3 = FileSystemStore;
      items = [, ];
      items[0] = f52113(FileSystemStore[8]);
      items[1] = {
        APP_STATE_UPDATE(arg0) {
              return tmp4Result.handleAppStateUpdate(arg0);
            },
        POST_CONNECTION_OPEN() {
              return tmp4Result.handlePostConnectionOpen();
            }
      };
      obj = closure_6(FileSystemStore);
      tmp4 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp4Result = tmp4(self, constructResult);
      f52113 = tmp4Result;
      tmp4Result.isLowDisk = false;
      refreshResult = tmp4Result.refresh();
      waitForResult = tmp4Result.waitFor(tmp2(tmp3[9]));
      timerId = setInterval(() => tmp4Result.refresh(), closure_9);
      return tmp4Result;
    }
  }
  const dependencyMap = FileSystemStore;
  callback3(FileSystemStore, Store);
  let obj = {
    key: "handlePostConnectionOpen",
    value() {
      this.refresh();
      return false;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handleAppStateUpdate",
    value(state) {
      const self = this;
      if ("active" !== state.state) {
        self.refresh();
      }
      return false;
    }
  };
  items[1] = obj;
  obj = { key: "refresh" };
  let closure_0 = callback(async function() {
    const self = this;
    const databaseResult = callback(closure_1[9]).database();
    if (null != databaseResult) {
      const fsInfoResult = databaseResult.fsInfo();
      if (null != fsInfoResult) {
        const catchPromise = fsInfoResult.catch((arg0) => closure_8.warn("couldn't get fs info", arg0));
      }
    }
    const tmp2 = yield catchPromise;
    if (null != tmp2) {
      let tmp3 = tmp2.fs.available < 268435456;
      if (!tmp3) {
        tmp3 = tmp2.fs.available < 3 * tmp2.database.used;
      }
      if (!tmp3) {
        tmp3 = tmp2.fs.available < 2 * tmp2.database.total;
      }
      let tmp4 = tmp2.fs.available > 805306368;
      if (tmp4) {
        tmp4 = tmp2.fs.available > 4 * tmp2.database.used;
      }
      if (tmp4) {
        tmp4 = tmp2.fs.available > 4 * tmp2.database.total;
      }
      let tmp5 = tmp3;
      if (!tmp3) {
        let tmp6 = !tmp4;
        if (!tmp4) {
          tmp6 = null;
        }
        tmp5 = tmp6;
      }
      if (tmp7) {
        self.isLowDisk = tmp5;
        self.emitChange();
      }
      const tmp7 = null != tmp5 && self.isLowDisk !== tmp5;
    }
  });
  obj.value = function refresh() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(FileSystemStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp4 = new tmp4();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/app_database/stores/FileSystemStore.tsx");

export default tmp4;
