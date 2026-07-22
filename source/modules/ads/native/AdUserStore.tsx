// Module ID: 6967
// Function ID: 55710
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6967 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_6 = false;
let closure_7 = false;
let closure_8 = null;
let closure_9 = null;
let tmp2 = (Store) => {
  class AdUserStore {
    constructor() {
      self = this;
      tmp = AdUserStore(this, AdUserStore);
      obj = closure_3(AdUserStore);
      tmp2 = closure_2;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = AdUserStore;
  callback2(AdUserStore, Store);
  let obj = {
    key: "adUser",
    get() {
      return closure_5;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isFetching",
    get() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasFetchFailed",
    get() {
      return closure_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fetchPromise",
    get() {
      return closure_8;
    }
  };
  items[4] = {
    key: "lastFetchedAt",
    get() {
      return closure_9;
    }
  };
  items[5] = {
    key: "hasFetchedRecently",
    get() {
      let tmp = null != closure_9;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() - closure_9 < 21600000;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "setFetchPromise",
    value(arg0) {

    }
  };
  return callback(AdUserStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "AdUserStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {

  },
  FETCH_AD_USER_START: function handleFetchAdUserStart() {
    let closure_6 = true;
    let closure_9 = Date.now();
  },
  FETCH_AD_USER_SUCCESS: function handleFetchAdUserSuccess(advertisingId) {
    let closure_6 = false;
    let closure_8 = null;
    let closure_5 = { advertisingId: advertisingId.advertisingId, isLimitAdTrackingEnabled: advertisingId.isLimitAdTrackingEnabled };
    let closure_7 = false;
  },
  FETCH_AD_USER_FAILURE: function handleFetchAdUserFailure() {
    let closure_6 = false;
    let closure_7 = true;
    let closure_8 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/ads/native/AdUserStore.tsx");

export default tmp2;
