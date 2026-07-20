// Module ID: 11177
// Function ID: 87013
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11177 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getCacheKey(applicationId) {
  return "applicationId:" + applicationId.applicationId + " guildId:" + applicationId.guildId + " page:" + applicationId.page;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
let importDefaultResult = importDefault(dependencyMap[5]);
obj = { max: 20 };
importDefaultResult = new importDefaultResult(obj);
let closure_7 = {};
let tmp4 = (Store) => {
  class ApplicationDirectorySimilarApplicationsStore {
    constructor() {
      self = this;
      tmp = ApplicationDirectorySimilarApplicationsStore(this, ApplicationDirectorySimilarApplicationsStore);
      obj = closure_3(ApplicationDirectorySimilarApplicationsStore);
      tmp2 = closure_2;
      if (closure_8()) {
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
  let closure_0 = ApplicationDirectorySimilarApplicationsStore;
  callback2(ApplicationDirectorySimilarApplicationsStore, Store);
  let obj = {
    key: "getSimilarApplications",
    value(applicationId) {
      applicationId = applicationId.applicationId;
      if (null != applicationId) {
        const obj = { applicationId, guildId: tmp, page: tmp2 };
        return closure_6.get(callback3(obj));
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
        return closure_7[closure_9(undefined, obj)];
      }
    }
  };
  items[1] = obj;
  return callback(ApplicationDirectorySimilarApplicationsStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp4.displayName = "ApplicationDirectorySimilarApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function handleFetchSimilarApplications(applicationId) {
    let obj = { applicationId: applicationId.applicationId, guildId: applicationId.guildId, page: applicationId.page };
    obj = {};
    const merged = Object.assign(closure_7);
    obj[getCacheKey(obj)] = obj.FETCHING;
    closure_7 = obj;
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
    const merged = Object.assign(closure_7);
    obj[tmp] = obj.FETCHED;
    closure_7 = obj;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function handleFetchSimilarApplicationsFailure(applicationId) {
    let obj = { applicationId: applicationId.applicationId, guildId: applicationId.guildId, page: applicationId.page };
    obj = {};
    const merged = Object.assign(closure_7);
    obj[getCacheKey(obj)] = obj.ERROR;
    closure_7 = obj;
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx");

export default tmp4;
export const FetchState = obj;
