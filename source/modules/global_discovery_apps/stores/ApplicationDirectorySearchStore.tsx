// Module ID: 11218
// Function ID: 87297
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 11219, 1362, 566, 686, 2]

// Module 11218 (_isNativeReflectConstruct)
import priv from "priv";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "priv";

const require = arg1;
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
    source = require(11219) /* SearchAppsRequestSource */.SearchAppsRequestSource.APP_DIRECTORY;
  }
  return "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
}
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
obj = { max: 20 };
importDefaultResult = new importDefaultResult(obj);
let closure_9 = {};
let tmp4 = ((Store) => {
  class ApplicationDirectorySearchStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ApplicationDirectorySearchStore);
      obj = outer1_5(ApplicationDirectorySearchStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(ApplicationDirectorySearchStore, Store);
  let obj = {
    key: "getSearchResults",
    value(query) {
      return outer1_8.get(outer1_11({ query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source }));
    }
  };
  const items = [obj, ];
  obj = {
    key: "getFetchState",
    value(query) {
      return outer1_9[outer1_11(undefined, { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source })];
    }
  };
  items[1] = obj;
  return callback(ApplicationDirectorySearchStore, items);
})(require("initialize").Store);
tmp4.displayName = "ApplicationDirectorySearchStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function handleSearchFetch(query) {
    let obj = { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source };
    obj = {};
    const merged = Object.assign(obj);
    obj[getCacheKey(obj)] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function handleSearchFetchSuccess(query) {
    let obj = { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source };
    const tmp = getCacheKey(obj);
    obj = { lastFetchTimeMs: Date.now() };
    const merged = Object.assign(query.result);
    const result = importDefaultResult.set(tmp, obj);
    obj = {};
    const merged1 = Object.assign(obj);
    obj[tmp] = obj.FETCHED;
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function handleSearchFetchFailure(query) {
    let obj = { query: query.query, guildId: query.guildId, page: query.page, pageSize: query.pageSize, categoryId: query.categoryId, integrationType: query.integrationType, minUserInstallCommandCount: query.minUserInstallCommandCount, excludeAppsWithCustomInstallUrl: query.excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps: query.excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: query.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source: query.source };
    obj = {};
    const merged = Object.assign(obj);
    obj[getCacheKey(obj)] = obj.ERROR;
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx");

export default tmp4;
export const FetchState = obj;
