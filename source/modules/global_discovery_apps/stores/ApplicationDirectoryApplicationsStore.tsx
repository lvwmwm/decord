// Module ID: 5463
// Function ID: 46690
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 5463 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_1 from "__exportStarResult1";
import closure_2 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

function _isNativeReflectConstruct() {
  let __exportStarResult1 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return __exportStarResult1;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_7 = {};
let closure_8 = {};
const set = new Set();
let closure_10 = {};
let tmp3 = (Store) => {
  class ApplicationDirectoryApplicationsStore {
    constructor() {
      self = this;
      tmp = ApplicationDirectoryApplicationsStore(this, ApplicationDirectoryApplicationsStore);
      obj = closure_3(ApplicationDirectoryApplicationsStore);
      tmp2 = closure_2;
      if (closure_11()) {
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
  let __exportStarResult1 = ApplicationDirectoryApplicationsStore;
  callback2(ApplicationDirectoryApplicationsStore, Store);
  let obj = {
    key: "getApplication",
    value(arg0) {
      if (null != arg0) {
        return closure_7[arg0];
      }
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getApplicationRecord",
    value(arg0) {
      if (null != arg0) {
        if (null != closure_7[arg0]) {
          return closure_5.createFromServer(tmp2);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getApplications",
    value() {
      return closure_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplicationFetchState",
    value(arg0) {
      if (null != arg0) {
        return closure_8[arg0];
      }
    }
  };
  items[4] = {
    key: "getApplicationFetchStates",
    value() {
      return closure_8;
    }
  };
  items[5] = {
    key: "isInvalidApplication",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    }
  };
  items[6] = {
    key: "getInvalidApplicationIds",
    value() {
      return closure_9;
    }
  };
  items[7] = {
    key: "isFetching",
    value(arg0) {
      return this.getApplicationFetchState(arg0) === constants.FETCHING;
    }
  };
  items[8] = {
    key: "getApplicationLastFetchTime",
    value(arg0) {
      if (null != arg0) {
        return closure_10[arg0];
      }
    }
  };
  return callback(ApplicationDirectoryApplicationsStore, items);
}(require("__exportStarResult1").Store);
tmp3.displayName = "ApplicationDirectoryApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_APPLICATION: function handleFetchAppDirectoryApplication(applicationId) {
    const obj = {};
    const merged = Object.assign(closure_8);
    obj[applicationId.applicationId] = obj.FETCHING;
    closure_8 = obj;
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function handleFetchAppDirectoryAppSuccess(application) {
    application = application.application;
    let obj = {};
    const merged = Object.assign(closure_7);
    obj[application.id] = application;
    closure_7 = obj;
    obj = {};
    const merged1 = Object.assign(closure_8);
    obj[application.id] = obj.FETCHED;
    closure_8 = obj;
    obj = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(closure_10);
    obj[application.id] = timestamp;
    closure_10 = obj;
    if (set.has(application.id)) {
      set.delete(application.id);
      const _Set = Set;
      const set = new Set(set);
    }
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function handleFetchAppDirectoryAppFailure(applicationId) {
    applicationId = applicationId.applicationId;
    const obj = {};
    const merged = Object.assign(closure_8);
    obj[applicationId] = obj.ERROR;
    closure_8 = obj;
    if (applicationId.isInvalidApplication) {
      set.add(applicationId);
      const _Set = Set;
      const set = new Set(set);
    }
  }
};
tmp3 = new tmp3(require("__exportStarResult1"), obj);
const result = require("__exportStarResult1").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx");

export default tmp3;
export const FetchState = obj;
