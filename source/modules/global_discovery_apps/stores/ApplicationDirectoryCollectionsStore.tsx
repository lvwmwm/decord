// Module ID: 11182
// Function ID: 87034
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11182 (_isNativeReflectConstruct)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_8 = [];
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let tmp2 = (Store) => {
  class ApplicationDirectoryCollectionsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ApplicationDirectoryCollectionsStore);
      obj = closure_5(ApplicationDirectoryCollectionsStore);
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
  const importDefault = ApplicationDirectoryCollectionsStore;
  callback2(ApplicationDirectoryCollectionsStore, Store);
  let obj = {
    key: "getLastFetchTimeMs",
    value(surface) {
      return closure_11[closure_13(undefined, { surface: surface.surface, activeState: surface.activeState })];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getFetchState",
    value(surface) {
      return closure_10[closure_13(undefined, { surface: surface.surface, activeState: surface.activeState })];
    }
  };
  items[1] = obj;
  obj = {
    key: "getCollections",
    value(surface) {
      let tmp = closure_9[closure_13(undefined, { surface: surface.surface, activeState: surface.activeState })];
      if (null == tmp) {
        tmp = closure_8;
      }
      return tmp;
    }
  };
  items[2] = obj;
  return callback(ApplicationDirectoryCollectionsStore, items);
}(importDefault(dependencyMap[6]).Store);
obj = {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function handleFetchAppDirectoryCollections(arg0) {
    let activeState;
    let surface;
    const obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(closure_10);
    obj[getKey({ surface, activeState })] = obj.FETCHING;
    closure_10 = obj;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function handleFetchAppDirectoryCollectionsSuccess(collections) {
    collections = collections.collections;
    let obj = { surface: collections.surface, activeState: collections.activeState };
    const tmp = getKey(obj);
    const mapped = collections.map((application_directory_collection_items) => {
      application_directory_collection_items.application_directory_collection_items = callback(closure_1[5]).sortBy(application_directory_collection_items.application_directory_collection_items, ["Set", "shapes"]);
      return application_directory_collection_items;
    });
    let obj1 = importDefault(dependencyMap[5]);
    obj = {};
    const merged = Object.assign(closure_9);
    obj[tmp] = obj1.sortBy(mapped, ["Set", "shapes"]);
    closure_9 = obj;
    obj = {};
    const merged1 = Object.assign(closure_10);
    obj[tmp] = obj.FETCHED;
    closure_10 = obj;
    obj1 = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(closure_11);
    obj1[tmp] = timestamp;
    closure_11 = obj1;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function handleFetchAppDirectoryCollectionsFailure(arg0) {
    let activeState;
    let surface;
    const obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(closure_10);
    obj[getKey({ surface, activeState })] = obj.ERROR;
    closure_10 = obj;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx");

export default tmp2;
export const FetchState = obj;
