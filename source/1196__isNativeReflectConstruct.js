// Module ID: 1196
// Function ID: 13735
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1196 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = (Store) => {
  class MobileCacheSnapshotStore {
    constructor(arg0, arg1) {
      self = this;
      tmp = MobileCacheSnapshotStore;
      tmp2 = closure_3(this, MobileCacheSnapshotStore);
      tmp3 = closure_1;
      tmp4 = closure_2;
      items = [, , ];
      items[0] = closure_1(closure_2[5]);
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
      obj2 = closure_6(MobileCacheSnapshotStore);
      tmp6 = closure_5;
      if (closure_8()) {
        tmp8 = globalThis;
        _Reflect = Reflect;
        tmp9 = closure_6;
        constructResult = Reflect.construct(obj2, items, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp6Result = tmp6(self, constructResult);
      MobileCacheSnapshotStore = tmp6Result;
      tmp3Result = tmp3(tmp4[6]);
      tmp10Result = tmp3Result(null != tmp6Result.getClass().displayName, "Snapshot stores need a display name");
      tmp12 = tmp3(tmp4[6])(!("CLEAR_CACHES" in Store), "MobileCacheSnapshotStores cannot use the 'CLEAR_CACHES' action");
      tmp13 = tmp3(tmp4[6])(!("WRITE_CACHES" in Store), "MobileCacheSnapshotStores cannot use the 'WRITE_CACHES' action");
      allStores = tmp.allStores;
      arr = allStores.push(tmp6Result);
      return tmp6Result;
    }
  }
  const arg1 = MobileCacheSnapshotStore;
  callback2(MobileCacheSnapshotStore, Store);
  let obj = {
    key: "persistKey",
    get() {
      return "" + this.getClass().displayName + "-snapshot";
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "clear",
    value() {
      const Storage = MobileCacheSnapshotStore(closure_2[7]).Storage;
      Storage.remove(this.persistKey);
    }
  };
  items[1] = obj;
  obj = {
    key: "save",
    value() {
      const Storage = MobileCacheSnapshotStore(closure_2[7]).Storage;
      const result = Storage.set(this.persistKey, this.takeSnapshot());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "readSnapshot",
    value(arg0) {
      const Storage = MobileCacheSnapshotStore(closure_2[7]).Storage;
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
}(importDefault(dependencyMap[8]).Store);
tmp2.allStores = [];
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/MobileCacheSnapshotStore.tsx");

export default tmp2;
