// Module ID: 12120
// Function ID: 94946
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 22, 566, 686, 2]

// Module 12120 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateAssetsFromConfigs(configs) {
  const _require = false;
  const entries = Object.entries(_require(22).groupBy(configs, (application_id) => application_id.application_id));
  const mapped = entries.map((arg0) => {
    let obj;
    let tmp;
    [tmp, obj] = arg0;
    const items = [
      tmp,
      obj.flatMap((resolved_assets) => {
        resolved_assets = resolved_assets.resolved_assets;
        if (null == resolved_assets) {
          resolved_assets = [];
        }
        return resolved_assets;
      }).filter((updated_at) => {
        const value = outer2_7.get(closure_0);
        let tmp2;
        if (null != value) {
          tmp2 = value[updated_at.key];
        }
        let tmp3 = null == tmp2;
        if (!tmp3) {
          const _Date = Date;
          const date = new Date(updated_at.updated_at);
          const _Date2 = Date;
          const date1 = new Date(tmp2.updated_at);
          tmp3 = date > date1;
        }
        return tmp3;
      })
    ];
    return items;
  });
  const found = mapped.filter((arg0) => {
    let arr;
    [, arr] = arg0;
    return arr.length > 0;
  });
  const item = found.forEach((arg0) => {
    let arr;
    let tmp;
    [tmp, arr] = arg0;
    let c0 = true;
    const merged = Object.assign(outer1_7.get(tmp));
    const merged1 = Object.assign(Object.fromEntries(arr.map((key) => {
      const items = [key.key, key];
      return items;
    })));
    return outer1_7.set(tmp, {});
  });
  return _require;
}
function handleFeaturedOrDeveloperFetchSuccess(configs) {
  const values = Object.values(configs.configs);
  return updateAssetsFromConfigs(values.flat());
}
const map = new Map();
let tmp3 = ((Store) => {
  class ApplicationAssetsV2Store {
    constructor() {
      self = this;
      tmp = outer1_2(this, ApplicationAssetsV2Store);
      obj = outer1_5(ApplicationAssetsV2Store);
      tmp2 = outer1_4;
      if (outer1_8()) {
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
  callback2(ApplicationAssetsV2Store, Store);
  const items = [
    {
      key: "getAssets",
      value(arg0) {
        return outer1_7.get(arg0);
      }
    }
  ];
  return callback(ApplicationAssetsV2Store, items);
})(require("initialize").Store);
tmp3.displayName = "ApplicationAssetsV2Store";
tmp3 = new tmp3(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    map.clear();
  },
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function handleFetchSuccess(configs) {
    return updateAssetsFromConfigs(configs.configs);
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess,
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/application_assets_v2/ApplicationAssetsV2Store.tsx");

export default tmp3;
