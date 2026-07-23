// Module ID: 1196
// Function ID: 13740
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 686, 44, 587, 566, 2]

// Module 1196 (_isNativeReflectConstruct)
import invariant from "invariant";
import Storage from "Storage";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((Store) => {
  class MobileCacheSnapshotStore {
    constructor(arg0, arg1) {
      self = this;
      tmp = apply;
      tmp2 = outer1_3(this, apply);
      tmp3 = outer1_1;
      tmp4 = outer1_2;
      items = [, , ];
      items[0] = outer1_1(outer1_2[5]);
      obj = {};
      merged = Object.assign(Store);
      obj["CLEAR_CACHES"] = function CLEAR_CACHES() {
        tmp6Result.clear();
        return false;
      };
      obj["WRITE_CACHES"] = function WRITE_CACHES() {
        tmp6Result.save();
        return false;
      };
      items[1] = obj;
      items[2] = arg1;
      obj2 = outer1_6(apply);
      tmp6 = outer1_5;
      if (outer1_8()) {
        tmp8 = globalThis;
        _Reflect = Reflect;
        tmp9 = outer1_6;
        constructResult = Reflect.construct(obj2, items, outer1_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp6Result = tmp6(self, constructResult);
      apply = tmp6Result;
      tmp3Result = tmp3(tmp4[6]);
      tmp10Result = tmp3Result(null != tmp6Result.getClass().displayName, "Snapshot stores need a display name");
      tmp12 = tmp3(tmp4[6])(!("CLEAR_CACHES" in Store), "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action");
      tmp13 = tmp3(tmp4[6])(!("WRITE_CACHES" in Store), "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action");
      allStores = tmp.allStores;
      arr = allStores.push(tmp6Result);
      return tmp6Result;
    }
  }
  callback2(MobileCacheSnapshotStore, Store);
  let obj = {
    key: "persistKey",
    get() {
      return "" + this.getClass().displayName + "-snapshot";
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "clear",
    value() {
      const Storage = MobileCacheSnapshotStore(outer1_2[7]).Storage;
      Storage.remove(this.persistKey);
    }
  };
  items[1] = obj;
  obj = {
    key: "save",
    value() {
      const Storage = MobileCacheSnapshotStore(outer1_2[7]).Storage;
      const result = Storage.set(this.persistKey, this.takeSnapshot());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "readSnapshot",
    value(arg0) {
      const Storage = MobileCacheSnapshotStore(outer1_2[7]).Storage;
      const value = Storage.get(this.persistKey);
      let data = null;
      if (null != value) {
        data = null;
        if (value.version === arg0) {
          data = value.data;
        }
      }
      return data;
    }
  };
  items[4] = {
    key: "getClass",
    value() {
      return this.constructor;
    }
  };
  const items1 = [
    {
      key: "clearAll",
      value() {
        const allStores = MobileCacheSnapshotStore.allStores;
        const item = allStores.forEach((clear) => clear.clear());
      }
    }
  ];
  return callback(MobileCacheSnapshotStore, items, items1);
})(require("initialize").Store);
tmp2.allStores = [];
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/MobileCacheSnapshotStore.tsx");

export default tmp2;
