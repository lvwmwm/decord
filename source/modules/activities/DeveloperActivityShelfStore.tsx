// Module ID: 7370
// Function ID: 59399
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 7371, 3803, 566, 686, 2]

// Module 7370 (_isNativeReflectConstruct)
import getApplicationFlags from "getApplicationFlags";
import explicitContentFromProto from "explicitContentFromProto";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { ApplicationFlags } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
obj = { INITIALIZED: "INITIALIZED", LOADING: "LOADING", LOADED: "LOADED", ERROR: "ERROR" };
let INITIALIZED = obj.INITIALIZED;
let closure_11 = [];
let tmp2 = ((PersistedStore) => {
  class DeveloperActivityShelfStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, DeveloperActivityShelfStore);
      obj = outer1_5(DeveloperActivityShelfStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
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
  callback2(DeveloperActivityShelfStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      obj = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
      if (null == arg0) {
        obj = {};
      }
      const merged = Object.assign(obj);
      const outer1_8 = obj;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getIsEnabled",
    value() {
      const DeveloperMode = DeveloperActivityShelfStore(outer1_1[7]).DeveloperMode;
      let setting = DeveloperMode.getSetting();
      if (setting) {
        setting = outer1_11.length > 0;
      }
      return setting;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastUsedObject",
    value() {
      return outer1_8.lastUsedObject;
    }
  };
  items[4] = {
    key: "getUseActivityUrlOverride",
    value() {
      let useActivityUrlOverride = this.getIsEnabled();
      if (useActivityUrlOverride) {
        useActivityUrlOverride = outer1_8.useActivityUrlOverride;
      }
      return useActivityUrlOverride;
    }
  };
  items[5] = {
    key: "getActivityUrlOverride",
    value() {
      let activityUrlOverride = null;
      if (this.getIsEnabled()) {
        activityUrlOverride = outer1_8.activityUrlOverride;
      }
      return activityUrlOverride;
    }
  };
  items[6] = {
    key: "getFetchState",
    value() {
      return outer1_10;
    }
  };
  items[7] = {
    key: "getFilter",
    value() {
      let str = "";
      if (this.getIsEnabled()) {
        str = outer1_8.filter;
      }
      return str;
    }
  };
  items[8] = {
    key: "getDeveloperShelfItems",
    value() {
      return this.getIsEnabled() ? outer1_11 : [];
    }
  };
  items[9] = {
    key: "inDevModeForApplication",
    value(arg0) {
      let closure_0 = arg0;
      let isEnabled = this.getIsEnabled();
      if (isEnabled) {
        isEnabled = null != outer1_11.find((id) => id.id === closure_0);
      }
      return isEnabled;
    }
  };
  return callback(DeveloperActivityShelfStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "DeveloperActivityShelfStore";
tmp2.persistKey = "DeveloperActivityShelfStore";
let items = [
  (arg0) => {
    delete tmp.isEnabled;
    const merged = Object.assign(arg0);
    return {};
  }
];
tmp2.migrations = items;
obj = {
  LOGOUT: function reset() {
    const obj = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
    const INITIALIZED = obj.INITIALIZED;
    let closure_11 = [];
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function handleToggleUseActivityUrlOverride() {
    obj.useActivityUrlOverride = !obj.useActivityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function handleSetActivityUrlOverride(activityUrlOverride) {
    obj.activityUrlOverride = activityUrlOverride.activityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function handleMarkActivityUsed(applicationId) {
    applicationId = applicationId.applicationId;
    if (null == closure_11.find((id) => id.id === applicationId)) {
      return false;
    } else {
      obj.lastUsedObject[applicationId] = applicationId.timestamp;
    }
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    const LOADING = obj.LOADING;
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function handleEmbeddedActivitiesFetchDeveloperApplicationsSuccess(applications) {
    applications = applications.applications;
    const LOADED = obj.LOADED;
    let closure_11 = applications.filter((application) => outer1_0(outer1_1[6]).hasApplicationFlag(application, outer1_7.EMBEDDED));
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg0) {
    const ERROR = obj.ERROR;
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function handleUpdateFilter(arg0) {
    obj.filter = arg0.filter;
  },
  USER_SETTINGS_PROTO_UPDATE() {

  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/activities/DeveloperActivityShelfStore.tsx");

export default tmp2;
export const DevShelfFetchState = obj;
