// Module ID: 3808
// Function ID: 31412
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 3808 (_isNativeReflectConstruct)
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import result from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setUserCountryCode(countryCode) {
  if (null == countryCode) {
    return false;
  } else {
    let tmp2 = callback4(countryCode);
    if (null == tmp2) {
      tmp2 = callback3();
    }
    let closure_10 = tmp2;
  }
}
({ getDefaultCountryCode: closure_7, getCountryCodeByAlpha2: closure_8 } = result);
let closure_9 = null;
let closure_10 = null;
let tmp3 = (Store) => {
  class RegionalFeatureConfigStore {
    constructor() {
      self = this;
      tmp = closure_2(this, RegionalFeatureConfigStore);
      obj = closure_5(RegionalFeatureConfigStore);
      tmp2 = closure_4;
      if (closure_11()) {
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
  const arg1 = RegionalFeatureConfigStore;
  callback2(RegionalFeatureConfigStore, Store);
  let obj = {
    key: "getRegionalFeatureConfig",
    value() {
      return closure_9;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "isFeatureAgeGated",
    value(AGE_GATED_SPACES) {
      let isFeatureAgeGatedResult;
      if (null != closure_9) {
        isFeatureAgeGatedResult = closure_9.isFeatureAgeGated(AGE_GATED_SPACES);
      }
      return null != isFeatureAgeGatedResult && isFeatureAgeGatedResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "isSettingTeenByDefault",
    value(arg0) {
      let result;
      if (null != closure_9) {
        result = closure_9.isFeatureTeenByDefault(arg0);
      }
      return null != result && result;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasAgeGatedFeatures",
    value() {
      let hasAgeGatedFeaturesResult;
      if (null != closure_9) {
        hasAgeGatedFeaturesResult = closure_9.hasAgeGatedFeatures();
      }
      return null != hasAgeGatedFeaturesResult && hasAgeGatedFeaturesResult;
    }
  };
  items[4] = {
    key: "hasTeenDefaults",
    value() {
      let hasTeenDefaultsResult;
      if (null != closure_9) {
        hasTeenDefaultsResult = closure_9.hasTeenDefaults();
      }
      return null != hasTeenDefaultsResult && hasTeenDefaultsResult;
    }
  };
  items[5] = {
    key: "getUserCountryCode",
    value() {
      return closure_10;
    }
  };
  return callback(RegionalFeatureConfigStore, items);
}(require("result").Store);
tmp3.displayName = "RegionalFeatureConfigStore";
tmp3 = new tmp3(require("result"), {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    setUserCountryCode(countryCode.countryCode);
    let fromConnectionOpenResult = null;
    if (null != countryCode.regionalFeatureConfig) {
      const RegionalFeatureConfig = arg1(dependencyMap[6]).RegionalFeatureConfig;
      fromConnectionOpenResult = RegionalFeatureConfig.fromConnectionOpen(countryCode.regionalFeatureConfig);
    }
    let closure_9 = fromConnectionOpenResult;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(countryCode) {
    return setUserCountryCode(countryCode.countryCode);
  }
});
result = result.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigStore.tsx");

export default tmp3;
