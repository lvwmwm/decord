// Module ID: 11193
// Function ID: 87097
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 22, 566, 686, 2]

// Module 11193 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getKey(surface) {
  return "surface:" + surface.surface + " activeState:" + surface.activeState;
}
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_8 = [];
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let tmp2 = ((Store) => {
  class ApplicationDirectoryCollectionsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ApplicationDirectoryCollectionsStore);
      obj = outer1_5(ApplicationDirectoryCollectionsStore);
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
  callback2(ApplicationDirectoryCollectionsStore, Store);
  let obj = {
    key: "getLastFetchTimeMs",
    value(surface) {
      return outer1_11[outer1_13(undefined, { surface: surface.surface, activeState: surface.activeState })];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getFetchState",
    value(surface) {
      return outer1_10[outer1_13(undefined, { surface: surface.surface, activeState: surface.activeState })];
    }
  };
  items[1] = obj;
  obj = {
    key: "getCollections",
    value(surface) {
      let tmp = outer1_9[outer1_13(undefined, { surface: surface.surface, activeState: surface.activeState })];
      if (null == tmp) {
        tmp = outer1_8;
      }
      return tmp;
    }
  };
  items[2] = obj;
  return callback(ApplicationDirectoryCollectionsStore, items);
})(require("initialize").Store);
obj = {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function handleFetchAppDirectoryCollections(arg0) {
    let activeState;
    let surface;
    const obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(obj);
    obj[getKey({ surface, activeState })] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function handleFetchAppDirectoryCollectionsSuccess(collections) {
    collections = collections.collections;
    let obj = { surface: collections.surface, activeState: collections.activeState };
    const tmp = getKey(obj);
    const mapped = collections.map((application_directory_collection_items) => {
      application_directory_collection_items.application_directory_collection_items = outer1_0(outer1_1[5]).sortBy(application_directory_collection_items.application_directory_collection_items, ["position", "id"]);
      return application_directory_collection_items;
    });
    let obj1 = importDefault(22);
    obj = {};
    const merged = Object.assign(obj);
    obj[tmp] = obj1.sortBy(mapped, ["position", "id"]);
    obj = {};
    const merged1 = Object.assign(obj);
    obj[tmp] = obj.FETCHED;
    obj1 = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(obj1);
    obj1[tmp] = timestamp;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function handleFetchAppDirectoryCollectionsFailure(arg0) {
    let activeState;
    let surface;
    const obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(obj);
    obj[getKey({ surface, activeState })] = obj.ERROR;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx");

export default tmp2;
export const FetchState = obj;
