// Module ID: 6972
// Function ID: 55744
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6972 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c6 = false;
let c7 = false;
let c8 = null;
let c9 = null;
let tmp2 = ((Store) => {
  class AdUserStore {
    constructor() {
      self = this;
      tmp = AdUserStore(this, AdUserStore);
      obj = outer1_3(AdUserStore);
      tmp2 = outer1_2;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AdUserStore, Store);
  let obj = {
    key: "adUser",
    get() {
      return outer1_5;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isFetching",
    get() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasFetchFailed",
    get() {
      return outer1_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "fetchPromise",
    get() {
      return outer1_8;
    }
  };
  items[4] = {
    key: "lastFetchedAt",
    get() {
      return outer1_9;
    }
  };
  items[5] = {
    key: "hasFetchedRecently",
    get() {
      let tmp = null != outer1_9;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() - outer1_9 < 21600000;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "setFetchPromise",
    value(arg0) {
      const outer1_8 = arg0;
    }
  };
  return callback(AdUserStore, items);
})(require("initialize").Store);
tmp2.displayName = "AdUserStore";
tmp2 = new tmp2(require("dispatcher"), {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {

  },
  FETCH_AD_USER_START: function handleFetchAdUserStart() {
    let c6 = true;
    let closure_9 = Date.now();
  },
  FETCH_AD_USER_SUCCESS: function handleFetchAdUserSuccess(advertisingId) {
    let c6 = false;
    let c8 = null;
    let closure_5 = { advertisingId: advertisingId.advertisingId, isLimitAdTrackingEnabled: advertisingId.isLimitAdTrackingEnabled };
    let c7 = false;
  },
  FETCH_AD_USER_FAILURE: function handleFetchAdUserFailure() {
    let c6 = false;
    let c7 = true;
    let c8 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/ads/native/AdUserStore.tsx");

export default tmp2;
