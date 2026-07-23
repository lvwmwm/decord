// Module ID: 3810
// Function ID: 31419
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3811, 3815, 566, 686, 2]

// Module 3810 (_isNativeReflectConstruct)
import SettingsConfig from "SettingsConfig";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import getCountryCodeByCountryName from "getCountryCodeByCountryName";

let closure_7;
let closure_8;
const require = arg1;
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
    let c10 = tmp2;
  }
}
({ getDefaultCountryCode: closure_7, getCountryCodeByAlpha2: closure_8 } = getCountryCodeByCountryName);
let c9 = null;
let c10 = null;
let tmp3 = ((Store) => {
  class RegionalFeatureConfigStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, RegionalFeatureConfigStore);
      obj = outer1_5(RegionalFeatureConfigStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
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
  callback2(RegionalFeatureConfigStore, Store);
  let obj = {
    key: "getRegionalFeatureConfig",
    value() {
      return outer1_9;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "isFeatureAgeGated",
    value(AGE_GATED_SPACES) {
      let isFeatureAgeGatedResult;
      if (null != outer1_9) {
        isFeatureAgeGatedResult = outer1_9.isFeatureAgeGated(AGE_GATED_SPACES);
      }
      return null != isFeatureAgeGatedResult && isFeatureAgeGatedResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "isSettingTeenByDefault",
    value(arg0) {
      let result;
      if (null != outer1_9) {
        result = outer1_9.isFeatureTeenByDefault(arg0);
      }
      return null != result && result;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasAgeGatedFeatures",
    value() {
      let hasAgeGatedFeaturesResult;
      if (null != outer1_9) {
        hasAgeGatedFeaturesResult = outer1_9.hasAgeGatedFeatures();
      }
      return null != hasAgeGatedFeaturesResult && hasAgeGatedFeaturesResult;
    }
  };
  items[4] = {
    key: "hasTeenDefaults",
    value() {
      let hasTeenDefaultsResult;
      if (null != outer1_9) {
        hasTeenDefaultsResult = outer1_9.hasTeenDefaults();
      }
      return null != hasTeenDefaultsResult && hasTeenDefaultsResult;
    }
  };
  items[5] = {
    key: "getUserCountryCode",
    value() {
      return outer1_10;
    }
  };
  return callback(RegionalFeatureConfigStore, items);
})(require("initialize").Store);
tmp3.displayName = "RegionalFeatureConfigStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    setUserCountryCode(countryCode.countryCode);
    let fromConnectionOpenResult = null;
    if (null != countryCode.regionalFeatureConfig) {
      const RegionalFeatureConfig = require(3815) /* SettingsConfig */.RegionalFeatureConfig;
      fromConnectionOpenResult = RegionalFeatureConfig.fromConnectionOpen(countryCode.regionalFeatureConfig);
    }
    let c9 = fromConnectionOpenResult;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(countryCode) {
    return setUserCountryCode(countryCode.countryCode);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigStore.tsx");

export default tmp3;
