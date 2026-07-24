// Module ID: 6711
// Function ID: 52167
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 15, 17, 18, 3, 664, 686, 1882, 566, 2]

// Module 6711 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import timestamp from "timestamp";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_7 from "_inherits";
import importDefaultResult from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
importDefaultResult = new importDefaultResult("FileSystemStore");
let closure_9 = 10 * require("set").Millis.MINUTE;
let tmp4 = ((Store) => {
  class FileSystemStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, FileSystemStore);
      tmp2 = f52178;
      tmp3 = FileSystemStore;
      items = [, ];
      items[0] = f52178(FileSystemStore[8]);
      items[1] = {
        APP_STATE_UPDATE(arg0) {
              return tmp4Result.handleAppStateUpdate(arg0);
            },
        POST_CONNECTION_OPEN() {
              return tmp4Result.handlePostConnectionOpen();
            }
      };
      obj = outer1_6(FileSystemStore);
      tmp4 = outer1_5;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp4Result = tmp4(self, constructResult);
      apply = tmp4Result;
      tmp4Result.isLowDisk = false;
      refreshResult = tmp4Result.refresh();
      waitForResult = tmp4Result.waitFor(tmp2(tmp3[9]));
      timerId = setInterval(() => tmp4Result.refresh(), outer1_9);
      return tmp4Result;
    }
  }
  callback3(FileSystemStore, Store);
  let obj = {
    key: "handlePostConnectionOpen",
    value() {
      this.refresh();
      return false;
    }
  };
  let items = [obj, , ];
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
    const databaseResult = callback(FileSystemStore[9]).database();
    if (null != databaseResult) {
      const fsInfoResult = databaseResult.fsInfo();
      if (null != fsInfoResult) {
        const catchPromise = fsInfoResult.catch((arg0) => outer3_8.warn("couldn't get fs info", arg0));
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
      tmp7 = null != tmp5 && self.isLowDisk !== tmp5;
    }
  });
  obj.value = function refresh() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(FileSystemStore, items);
})(require("initialize").Store);
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/stores/FileSystemStore.tsx");

export default tmp4;
