// Module ID: 11194
// Function ID: 87111
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1362, 566, 686, 2]

// Module 11194 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "priv";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function getCacheKey(applicationId) {
  return "applicationId:" + applicationId.applicationId + " guildId:" + applicationId.guildId + " page:" + applicationId.page;
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
obj = { max: 20 };
importDefaultResult = new importDefaultResult(obj);
let closure_7 = {};
let tmp4 = ((Store) => {
  class ApplicationDirectorySimilarApplicationsStore {
    constructor() {
      self = this;
      tmp = ApplicationDirectorySimilarApplicationsStore(this, ApplicationDirectorySimilarApplicationsStore);
      obj = outer1_3(ApplicationDirectorySimilarApplicationsStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(ApplicationDirectorySimilarApplicationsStore, Store);
  let obj = {
    key: "getSimilarApplications",
    value(applicationId) {
      applicationId = applicationId.applicationId;
      if (null != applicationId) {
        const obj = { applicationId, guildId: tmp, page: tmp2 };
        return outer1_6.get(outer1_9(obj));
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getFetchState",
    value(applicationId) {
      applicationId = applicationId.applicationId;
      if (null != applicationId) {
        const obj = { applicationId, guildId: tmp, page: tmp2 };
        return outer1_7[outer1_9(undefined, obj)];
      }
    }
  };
  items[1] = obj;
  return callback(ApplicationDirectorySimilarApplicationsStore, items);
})(require("initialize").Store);
tmp4.displayName = "ApplicationDirectorySimilarApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function handleFetchSimilarApplications(applicationId) {
    let obj = { applicationId: applicationId.applicationId, guildId: applicationId.guildId, page: applicationId.page };
    obj = {};
    const merged = Object.assign(obj);
    obj[getCacheKey(obj)] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function handleFetchSimilarApplicationsSuccess(applicationId) {
    let loadId;
    let similarApplications;
    let totalPages;
    const page = applicationId.page;
    let obj = { applicationId: applicationId.applicationId, guildId: applicationId.guildId, page };
    ({ similarApplications, loadId, totalPages } = applicationId);
    const tmp = getCacheKey(obj);
    obj = { lastFetchTimeMs: Date.now(), applications: similarApplications, loadId, page, totalPages };
    const result = importDefaultResult.set(tmp, obj);
    obj = {};
    const merged = Object.assign(obj);
    obj[tmp] = obj.FETCHED;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function handleFetchSimilarApplicationsFailure(applicationId) {
    let obj = { applicationId: applicationId.applicationId, guildId: applicationId.guildId, page: applicationId.page };
    obj = {};
    const merged = Object.assign(obj);
    obj[getCacheKey(obj)] = obj.ERROR;
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx");

export default tmp4;
export const FetchState = obj;
