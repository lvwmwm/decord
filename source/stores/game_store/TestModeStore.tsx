// Module ID: 7372
// Function ID: 59431
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1279, 1316, 4165, 3803, 566, 686, 2]

// Module 7372 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resetError() {
  let c12 = null;
}
function reset() {
  let c10 = null;
  let c11 = null;
  const set = new Set();
  obj.applicationId = null;
  obj.originURL = null;
  resetError();
}
let obj = { applicationId: null, originURL: null };
let set = new Set();
let c16 = false;
let tmp3 = ((PersistedStore) => {
  class TestModeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, TestModeStore);
      obj = outer1_5(TestModeStore);
      tmp2 = outer1_4;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(TestModeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      const self = this;
      const obj = {};
      if (null == arg0) {
        tmp = outer1_13;
      }
      const merged = Object.assign(tmp);
      const outer1_14 = obj;
      const outer1_10 = obj.applicationId;
      const outer1_11 = outer1_14.originURL;
      self.waitFor(outer1_9, outer1_7, outer1_8);
      const items = [outer1_8, outer1_7];
      self.syncWith(items, () => true);
      outer1_9.whenInitialized(() => {
        const outer2_16 = true;
      });
    }
  };
  let items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getTestModeApplicationId",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "inTestModeForApplication",
    value(arg0) {
      return outer1_10 === arg0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "inTestModeForEmbeddedApplication",
    value(arg0) {
      let tmp = outer1_10 === arg0;
      if (tmp) {
        tmp = null != outer1_11;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "shouldDisplayTestMode",
    value(arg0) {
      const self = this;
      const DeveloperMode = TestModeStore(outer1_1[8]).DeveloperMode;
      let setting = DeveloperMode.getSetting();
      if (setting) {
        setting = self.inTestModeForApplication(arg0);
      }
      return setting;
    }
  };
  items[5] = {
    key: "getState",
    value() {
      return outer1_14;
    }
  };
  items[6] = {
    key: "isTestMode",
    get() {
      return null != outer1_10;
    }
  };
  items[7] = {
    key: "isFetchingAuthorization",
    get() {
      return outer1_15.size > 0;
    }
  };
  items[8] = {
    key: "testModeEmbeddedApplicationId",
    get() {
      let tmp = null;
      if (null != outer1_11) {
        tmp = outer1_10;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "testModeApplicationId",
    get() {
      return outer1_10;
    }
  };
  items[10] = {
    key: "testModeOriginURL",
    get() {
      return outer1_11;
    }
  };
  items[11] = {
    key: "error",
    get() {
      return outer1_12;
    }
  };
  items[12] = {
    key: "whenInitialized",
    value(arg0) {
      let closure_0 = arg0;
      const result = this.addConditionalChangeListener(() => {
        if (outer2_16) {
          const _setImmediate = setImmediate;
          setImmediate(closure_0);
          return false;
        }
      });
    }
  };
  return callback(TestModeStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "TestModeStore";
tmp3.persistKey = "TestModeStore";
obj = {
  DEVELOPER_TEST_MODE_AUTHORIZATION_START: function handleDeveloperTestModeAuthorizationStart(applicationId) {
    set.add(applicationId.applicationId);
    let c12 = null;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function handleDeveloperTestModeAuthorizationSuccess(arg0) {
    let applicationId;
    let originURL;
    ({ applicationId, originURL } = arg0);
    set.delete(applicationId);
    let c12 = null;
    obj.applicationId = applicationId;
    obj.originURL = originURL;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function handleDeveloperTestModeAuthorizationFail(applicationId) {
    set.delete(applicationId.applicationId);
    const error = applicationId.error;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(testModeApplicationId) {
    testModeApplicationId = testModeApplicationId.testModeApplicationId;
  },
  DEVELOPER_TEST_MODE_RESET_ERROR: resetError,
  LOGOUT: reset,
  DEVELOPER_TEST_MODE_RESET: reset
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = set.fileFinishedImporting("stores/game_store/TestModeStore.tsx");

export default tmp3;
