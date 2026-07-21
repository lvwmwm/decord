// Module ID: 7367
// Function ID: 59386
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7367 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resetError() {
  let closure_12 = null;
}
function reset() {
  let closure_10 = null;
  let closure_11 = null;
  const set = new Set();
  obj.applicationId = null;
  obj.originURL = null;
  resetError();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let obj = { 38943585: "o", 1652276389: "o" };
const set = new Set();
let closure_16 = false;
let tmp3 = (PersistedStore) => {
  class TestModeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, TestModeStore);
      obj = closure_5(TestModeStore);
      tmp2 = closure_4;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = TestModeStore;
  callback2(TestModeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      const self = this;
      const obj = {};
      if (null == arg0) {
        tmp = closure_13;
      }
      const merged = Object.assign(tmp);
      const applicationId = obj.applicationId;
      const originURL = obj.originURL;
      self.waitFor(closure_9, closure_7, closure_8);
      const items = [closure_8, closure_7];
      self.syncWith(items, () => true);
      closure_9.whenInitialized(() => {
        let closure_16 = true;
      });
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getTestModeApplicationId",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "inTestModeForApplication",
    value(arg0) {
      return closure_10 === arg0;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "inTestModeForEmbeddedApplication",
    value(arg0) {
      let tmp = closure_10 === arg0;
      if (tmp) {
        tmp = null != closure_11;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "shouldDisplayTestMode",
    value(arg0) {
      const self = this;
      const DeveloperMode = TestModeStore(closure_1[8]).DeveloperMode;
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
      return closure_14;
    }
  };
  items[6] = {
    key: "isTestMode",
    get() {
      return null != closure_10;
    }
  };
  items[7] = {
    key: "isFetchingAuthorization",
    get() {
      return size.size > 0;
    }
  };
  items[8] = {
    key: "testModeEmbeddedApplicationId",
    get() {
      let tmp = null;
      if (null != closure_11) {
        tmp = closure_10;
      }
      return tmp;
    }
  };
  items[9] = {
    key: "testModeApplicationId",
    get() {
      return closure_10;
    }
  };
  items[10] = {
    key: "testModeOriginURL",
    get() {
      return closure_11;
    }
  };
  items[11] = {
    key: "error",
    get() {
      return closure_12;
    }
  };
  items[12] = {
    key: "whenInitialized",
    value(arg0) {
      const TestModeStore = arg0;
      const result = this.addConditionalChangeListener(() => {
        if (closure_16) {
          const _setImmediate = setImmediate;
          setImmediate(arg0);
          return false;
        }
      });
    }
  };
  return callback(TestModeStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp3.displayName = "TestModeStore";
tmp3.persistKey = "TestModeStore";
obj = {
  DEVELOPER_TEST_MODE_AUTHORIZATION_START: function handleDeveloperTestModeAuthorizationStart(applicationId) {
    set.add(applicationId.applicationId);
    let closure_12 = null;
  },
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function handleDeveloperTestModeAuthorizationSuccess(arg0) {
    let applicationId;
    let originURL;
    ({ applicationId, originURL } = arg0);
    set.delete(applicationId);
    let closure_12 = null;
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
tmp3 = new tmp3(importDefault(dependencyMap[10]), obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/game_store/TestModeStore.tsx");

export default tmp3;
