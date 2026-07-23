// Module ID: 5466
// Function ID: 46709
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4153, 566, 686, 2]

// Module 5466 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _callSuper from "_callSuper";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_7 = {};
let closure_8 = {};
let set = new Set();
let closure_10 = {};
let tmp3 = ((Store) => {
  class ApplicationDirectoryApplicationsStore {
    constructor() {
      self = this;
      tmp = ApplicationDirectoryApplicationsStore(this, ApplicationDirectoryApplicationsStore);
      obj = outer1_3(ApplicationDirectoryApplicationsStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
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
  callback2(ApplicationDirectoryApplicationsStore, Store);
  let obj = {
    key: "getApplication",
    value(arg0) {
      if (null != arg0) {
        return outer1_7[arg0];
      }
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getApplicationRecord",
    value(arg0) {
      if (null != arg0) {
        if (null != outer1_7[arg0]) {
          return outer1_5.createFromServer(tmp2);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getApplications",
    value() {
      return outer1_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getApplicationFetchState",
    value(arg0) {
      if (null != arg0) {
        return outer1_8[arg0];
      }
    }
  };
  items[4] = {
    key: "getApplicationFetchStates",
    value() {
      return outer1_8;
    }
  };
  items[5] = {
    key: "isInvalidApplication",
    value(arg0) {
      let hasItem = null != arg0;
      if (hasItem) {
        hasItem = outer1_9.has(arg0);
      }
      return hasItem;
    }
  };
  items[6] = {
    key: "getInvalidApplicationIds",
    value() {
      return outer1_9;
    }
  };
  items[7] = {
    key: "isFetching",
    value(arg0) {
      return this.getApplicationFetchState(arg0) === outer1_6.FETCHING;
    }
  };
  items[8] = {
    key: "getApplicationLastFetchTime",
    value(arg0) {
      if (null != arg0) {
        return outer1_10[arg0];
      }
    }
  };
  return callback(ApplicationDirectoryApplicationsStore, items);
})(require("initialize").Store);
tmp3.displayName = "ApplicationDirectoryApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_APPLICATION: function handleFetchAppDirectoryApplication(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function handleFetchAppDirectoryAppSuccess(application) {
    application = application.application;
    let obj = {};
    const merged = Object.assign(obj);
    obj[application.id] = application;
    obj = {};
    const merged1 = Object.assign(obj);
    obj[application.id] = obj.FETCHED;
    obj = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(obj);
    obj[application.id] = timestamp;
    if (set.has(application.id)) {
      set.delete(application.id);
      const _Set = Set;
      set = new Set(set);
    }
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function handleFetchAppDirectoryAppFailure(applicationId) {
    applicationId = applicationId.applicationId;
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId] = obj.ERROR;
    if (applicationId.isInvalidApplication) {
      set.add(applicationId);
      const _Set = Set;
      set = new Set(set);
    }
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx");

export default tmp3;
export const FetchState = obj;
