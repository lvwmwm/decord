// Module ID: 8320
// Function ID: 8321
// Name: DeveloperActivityShelfStore
// Dependencies: [1074, 8321, 504, 2021, 573, 2]

// Module 8320 (DeveloperActivityShelfStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import UserSettings from "UserSettings" /* 2021 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8321 */;
import size from "module_2" /* 2 */;

let closure_3, closure_6;

const ApplicationFlags = Constants.ApplicationFlags;
const _false = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
const DevShelfFetchState = { INITIALIZED: "INITIALIZED", LOADING: "LOADING", LOADED: "LOADED", ERROR: "ERROR" };
let ERROR = DevShelfFetchState.INITIALIZED;
const metroRequire = [];
const PersistedStore = get_initializedDefault.PersistedStore;
class DeveloperActivityShelfStore extends PersistedStore {
  initialize(arg0) {
    let obj = arg0;
    const obj2 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
    if (arg0 == null) {
      obj = {};
    }
    const merged = Object.assign(obj);
    closure_3 = obj2;
  }
  getState() {
    return closure_3;
  }
  getIsEnabled() {
    const DeveloperMode = UserSettings.DeveloperMode;
    const setting = DeveloperMode.getSetting() && closure_6.length > 0;
    return setting;
  }
  getLastUsedObject() {
    return closure_3.lastUsedObject;
  }
  getUseActivityUrlOverride() {
    const useActivityUrlOverride = this.getIsEnabled() && closure_3.useActivityUrlOverride;
    return useActivityUrlOverride;
  }
  getActivityUrlOverride() {
    let activityUrlOverride = null;
    if (this.getIsEnabled()) {
      activityUrlOverride = closure_3.activityUrlOverride;
    }
    return activityUrlOverride;
  }
  getFetchState() {
    return ERROR;
  }
  getFilter() {
    let str = "";
    if (this.getIsEnabled()) {
      str = closure_3.filter;
    }
    return str;
  }
  getDeveloperShelfItems() {
    return this.getIsEnabled() ? closure_6 : [];
  }
  inDevModeForApplication(id) {
    let closure_0 = id;
    const isEnabled = this.getIsEnabled() && null != closure_6.find((id) => id.id === closure_0);
    return isEnabled;
  }
}
const prototype = DeveloperActivityShelfStore.prototype;
DeveloperActivityShelfStore.displayName = "DeveloperActivityShelfStore";
DeveloperActivityShelfStore.persistKey = "DeveloperActivityShelfStore";
const items = [
  (arg0) => {
    delete arg0["isEnabled"];
    const obj = {};
    const merged = Object.assign(arg0);
    return obj;
  }
];
DeveloperActivityShelfStore.migrations = items;
let obj2 = {
  LOGOUT: function reset() {
    closure_3 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
    ERROR = obj.INITIALIZED;
    closure_6 = [];
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function handleToggleUseActivityUrlOverride() {
    closure_3.useActivityUrlOverride = !closure_3.useActivityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function handleSetActivityUrlOverride(activityUrlOverride) {
    closure_3.activityUrlOverride = activityUrlOverride.activityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function handleMarkActivityUsed(applicationId) {
    applicationId = applicationId.applicationId;
    const timestamp = applicationId.timestamp;
    if (null == closure_6.find((id) => id.id === applicationId)) {
      return false;
    } else {
      closure_3.lastUsedObject[applicationId] = timestamp;
    }
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    ERROR = obj.LOADING;
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function handleEmbeddedActivitiesFetchDeveloperApplicationsSuccess(applications) {
    let obj;
    applications = applications.applications;
    ERROR = obj.LOADED;
    closure_6 = applications.filter((item) => {
      const obj = ApplicationFlagUtils;
      return obj.hasApplicationFlag(item, constants.EMBEDDED);
    });
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg0) {
    ERROR = obj.ERROR;
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function handleUpdateFilter(arg0) {
    closure_3.filter = arg0.filter;
  },
  USER_SETTINGS_PROTO_UPDATE() {

  }
};
const developerActivityShelfStore = new DeveloperActivityShelfStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfStore.tsx");

export default developerActivityShelfStore;
export { DevShelfFetchState };
