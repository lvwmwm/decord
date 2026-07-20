// Module ID: 7360
// Function ID: 59331
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7360 (_isNativeReflectConstruct)
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
const ApplicationFlags = arg1(dependencyMap[5]).ApplicationFlags;
let closure_8 = { lastUsedObject: {} };
let obj = { INITIALIZED: "INITIALIZED", LOADING: "LOADING", LOADED: "LOADED", ERROR: "ERROR" };
const INITIALIZED = obj.INITIALIZED;
let closure_11 = [];
let tmp2 = (PersistedStore) => {
  class DeveloperActivityShelfStore {
    constructor() {
      self = this;
      tmp = closure_2(this, DeveloperActivityShelfStore);
      obj = closure_5(DeveloperActivityShelfStore);
      tmp2 = closure_4;
      if (closure_12()) {
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
  const arg1 = DeveloperActivityShelfStore;
  callback2(DeveloperActivityShelfStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      obj = { lastUsedObject: {} };
      if (null == arg0) {
        obj = {};
      }
      const merged = Object.assign(obj);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIsEnabled",
    value() {
      const DeveloperMode = DeveloperActivityShelfStore(closure_1[7]).DeveloperMode;
      let setting = DeveloperMode.getSetting();
      if (setting) {
        setting = closure_11.length > 0;
      }
      return setting;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastUsedObject",
    value() {
      return closure_8.lastUsedObject;
    }
  };
  items[4] = {
    key: "getUseActivityUrlOverride",
    value() {
      let useActivityUrlOverride = this.getIsEnabled();
      if (useActivityUrlOverride) {
        useActivityUrlOverride = closure_8.useActivityUrlOverride;
      }
      return useActivityUrlOverride;
    }
  };
  items[5] = {
    key: "getActivityUrlOverride",
    value() {
      let activityUrlOverride = null;
      if (this.getIsEnabled()) {
        activityUrlOverride = closure_8.activityUrlOverride;
      }
      return activityUrlOverride;
    }
  };
  items[6] = {
    key: "getFetchState",
    value() {
      return closure_10;
    }
  };
  items[7] = {
    key: "getFilter",
    value() {
      let str = "";
      if (this.getIsEnabled()) {
        str = closure_8.filter;
      }
      return str;
    }
  };
  items[8] = {
    key: "getDeveloperShelfItems",
    value() {
      return this.getIsEnabled() ? closure_11 : [];
    }
  };
  items[9] = {
    key: "inDevModeForApplication",
    value(arg0) {
      const DeveloperActivityShelfStore = arg0;
      let isEnabled = this.getIsEnabled();
      if (isEnabled) {
        isEnabled = null != closure_11.find((id) => id.id === id);
      }
      return isEnabled;
    }
  };
  return callback(DeveloperActivityShelfStore, items);
}(importDefault(dependencyMap[8]).PersistedStore);
tmp2.displayName = "DeveloperActivityShelfStore";
tmp2.persistKey = "DeveloperActivityShelfStore";
const items = [
  (arg0) => {
    delete r1.isEnabled;
    const merged = Object.assign(arg0);
    return {};
  }
];
tmp2.migrations = items;
obj = {
  LOGOUT: function reset() {
    let closure_8 = { lastUsedObject: {} };
    const INITIALIZED = obj.INITIALIZED;
    let closure_11 = [];
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function handleToggleUseActivityUrlOverride() {
    closure_8.useActivityUrlOverride = !closure_8.useActivityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function handleSetActivityUrlOverride(activityUrlOverride) {
    closure_8.activityUrlOverride = activityUrlOverride.activityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function handleMarkActivityUsed(applicationId) {
    applicationId = applicationId.applicationId;
    const arg1 = applicationId;
    if (null == closure_11.find((id) => id.id === applicationId)) {
      return false;
    } else {
      closure_8.lastUsedObject[applicationId] = applicationId.timestamp;
    }
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    const INITIALIZED = obj.LOADING;
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function handleEmbeddedActivitiesFetchDeveloperApplicationsSuccess(applications) {
    applications = applications.applications;
    const INITIALIZED = obj.LOADED;
    let closure_11 = applications.filter((application) => callback(closure_1[6]).hasApplicationFlag(application, constants.EMBEDDED));
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg0) {
    const INITIALIZED = obj.ERROR;
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function handleUpdateFilter(arg0) {
    closure_8.filter = arg0.filter;
  },
  USER_SETTINGS_PROTO_UPDATE() {

  }
};
tmp2 = new tmp2(importDefault(dependencyMap[9]), obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/activities/DeveloperActivityShelfStore.tsx");

export default tmp2;
export const DevShelfFetchState = obj;
