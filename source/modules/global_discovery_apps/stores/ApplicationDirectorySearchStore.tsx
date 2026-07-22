// Module ID: 11178
// Function ID: 86978
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11178 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getCacheKey(arg0) {
  let categoryId;
  let excludeAppsWithCustomInstallUrl;
  let excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
  let excludeNonEmbeddedApps;
  let guildId;
  let integrationType;
  let minUserInstallCommandCount;
  let page;
  let pageSize;
  let query;
  let source;
  ({ query, guildId, page, pageSize, categoryId, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
  if (source === undefined) {
    source = arg1(dependencyMap[5]).SearchAppsRequestSource.APP_DIRECTORY;
  }
  return "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let importDefaultResult = importDefault(dependencyMap[6]);
obj = { max: 20 };
importDefaultResult = new importDefaultResult(obj);
let closure_9 = {};
let tmp4 = (Store) => {
  class ApplicationDirectorySearchStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ApplicationDirectorySearchStore);
      obj = closure_5(ApplicationDirectorySearchStore);
      tmp2 = closure_4;
      if (closure_10()) {
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
  const arg1 = ApplicationDirectorySearchStore;
  callback2(ApplicationDirectorySearchStore, Store);
  let obj = {
    key: "getSearchResults",
    value(query) {
      return closure_8.get(callback4({ query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source }));
    }
  };
  const items = [obj, ];
  obj = {
    key: "getFetchState",
    value(query) {
      return closure_9[closure_11(undefined, { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source })];
    }
  };
  items[1] = obj;
  return callback(ApplicationDirectorySearchStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp4.displayName = "ApplicationDirectorySearchStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function handleSearchFetch(query) {
    let obj = { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source };
    obj = {};
    const merged = Object.assign(closure_9);
    obj[getCacheKey(obj)] = obj.FETCHING;
    closure_9 = obj;
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function handleSearchFetchSuccess(query) {
    let obj = { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source };
    const tmp = getCacheKey(obj);
    obj = { lastFetchTimeMs: Date.now() };
    const merged = Object.assign(query.result);
    const result = importDefaultResult.set(tmp, obj);
    obj = {};
    const merged1 = Object.assign(closure_9);
    obj[tmp] = obj.FETCHED;
    closure_9 = obj;
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function handleSearchFetchFailure(query) {
    let obj = { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source };
    obj = {};
    const merged = Object.assign(closure_9);
    obj[getCacheKey(obj)] = obj.ERROR;
    closure_9 = obj;
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx");

export default tmp4;
export const FetchState = obj;
