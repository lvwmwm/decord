// Module ID: 7910
// Function ID: 62749
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 22, 566, 686, 2]

// Module 7910 (_isNativeReflectConstruct)
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
function handleFetchEmbeddedActivityShelfSuccess(assets) {
  assets = assets.assets;
  let obj = {};
  const merged = Object.assign(obj);
  for (const key10013 in assets) {
    let tmp2 = key10013;
    let tmp3 = obj;
    obj[key10013] = obj.FETCH_SUCCESS;
    obj = {};
    let tmp5 = importDefault;
    let tmp6 = dependencyMap;
    let tmp4 = closure_9;
    let obj4 = importDefault(22);
    let keyByResult = obj4.keyBy(assets[key10013], "name");
    if (null == keyByResult) {
      keyByResult = {};
    }
    obj.assets = keyByResult;
    let _Date = Date;
    obj.lastUpdated = Date.now();
    tmp4[key10013] = obj;
    continue;
  }
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCH_SUCCESS: 2, [2]: "FETCH_SUCCESS" };
let closure_8 = {};
let closure_9 = {};
let tmp2 = ((Store) => {
  class ApplicationAssetsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ApplicationAssetsStore);
      obj = outer1_5(ApplicationAssetsStore);
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
  callback2(ApplicationAssetsStore, Store);
  let obj = {
    key: "getApplicationAssetFetchState",
    value(arg0) {
      let NOT_FETCHED = outer1_8[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_7.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getFetchingIds",
    value() {
      const entries = Object.entries(outer1_8);
      const found = entries.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return tmp === outer2_7.FETCHING;
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
      return outer1_9[arg0];
    }
  };
  items[2] = obj;
  return callback(ApplicationAssetsStore, items);
})(require("initialize").Store);
tmp2.displayName = "ApplicationAssetsStore";
obj = {
  APPLICATION_ASSETS_FETCH: function handleFetchApplicationAssets(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCHING;
  },
  APPLICATION_ASSETS_FETCH_SUCCESS: function handleFetchApplicationAssetsSuccess(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCH_SUCCESS;
  },
  APPLICATION_ASSETS_UPDATE: function handleUpdateApplicationAssets(assets) {
    assets = assets.assets;
    if (null != assets) {
      const obj = {};
      let keyByResult = importDefault(22).keyBy(assets, "name");
      if (null == keyByResult) {
        keyByResult = {};
      }
      obj.assets = keyByResult;
      const _Date = Date;
      obj.lastUpdated = Date.now();
      closure_9[tmp3] = obj;
      const obj2 = importDefault(22);
      const tmp5 = closure_9;
    } else {
      delete tmp[tmp2];
    }
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: handleFetchEmbeddedActivityShelfSuccess,
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: handleFetchEmbeddedActivityShelfSuccess
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/applications/ApplicationAssetsStore.tsx");

export default tmp2;
export const FetchState = obj;
