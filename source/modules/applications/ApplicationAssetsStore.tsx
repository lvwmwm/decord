// Module ID: 7814
// Function ID: 62370
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7814 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleFetchEmbeddedActivityShelfSuccess(assets) {
  assets = assets.assets;
  let obj = {};
  const merged = Object.assign(closure_8);
  for (const key10013 in assets) {
    let tmp2 = key10013;
    let tmp3 = closure_7;
    obj[key10013] = closure_7.FETCH_SUCCESS;
    obj = {};
    let tmp5 = closure_0;
    let tmp6 = closure_1;
    let tmp4 = closure_9;
    let obj4 = closure_0(closure_1[5]);
    let keyByResult = obj4.keyBy(assets[key10013], "name");
    if (null == keyByResult) {
      keyByResult = {};
    }
    obj.assets = keyByResult;
    let _Date = Date;
    obj.lastUpdated = Date.now();
    tmp4[key10013] = obj;
  }
  closure_8 = obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCH_SUCCESS: 2, [2]: "FETCH_SUCCESS" };
let closure_8 = {};
let closure_9 = {};
let tmp2 = (Store) => {
  class ApplicationAssetsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ApplicationAssetsStore);
      obj = closure_5(ApplicationAssetsStore);
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
  const importDefault = ApplicationAssetsStore;
  callback2(ApplicationAssetsStore, Store);
  let obj = {
    key: "getApplicationAssetFetchState",
    value(arg0) {
      let NOT_FETCHED = closure_8[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = constants.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getFetchingIds",
    value() {
      const entries = Object.entries(closure_8);
      const found = entries.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp === constants.FETCHING;
      });
      const items = [
        ...found.map((arg0) => {
          let tmp;
          [tmp] = arg0;
          return tmp;
        })
      ];
      return items;
    }
  };
  items[1] = obj;
  obj = {
    key: "getApplicationAssets",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  items[2] = obj;
  return callback(ApplicationAssetsStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "ApplicationAssetsStore";
obj = {
  APPLICATION_ASSETS_FETCH: function handleFetchApplicationAssets(applicationId) {
    const obj = {};
    const merged = Object.assign(closure_8);
    obj[applicationId.applicationId] = obj.FETCHING;
    closure_8 = obj;
  },
  APPLICATION_ASSETS_FETCH_SUCCESS: function handleFetchApplicationAssetsSuccess(applicationId) {
    const obj = {};
    const merged = Object.assign(closure_8);
    obj[applicationId.applicationId] = obj.FETCH_SUCCESS;
    closure_8 = obj;
  },
  APPLICATION_ASSETS_UPDATE: function handleUpdateApplicationAssets(assets) {
    assets = assets.assets;
    if (null != assets) {
      const obj = {};
      let keyByResult = importDefault(dependencyMap[5]).keyBy(assets, "name");
      if (null == keyByResult) {
        keyByResult = {};
      }
      obj.assets = keyByResult;
      const _Date = Date;
      obj.lastUpdated = Date.now();
      closure_9[tmp] = obj;
      const obj2 = importDefault(dependencyMap[5]);
      const tmp3 = closure_9;
    } else {
      delete r0[r2];
    }
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: handleFetchEmbeddedActivityShelfSuccess,
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: handleFetchEmbeddedActivityShelfSuccess
};
tmp2 = new tmp2(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/applications/ApplicationAssetsStore.tsx");

export default tmp2;
export const FetchState = obj;
