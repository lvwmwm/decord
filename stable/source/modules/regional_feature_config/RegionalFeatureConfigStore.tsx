// Module ID: 5910
// Function ID: 5911
// Name: RegionalFeatureConfigStore
// Dependencies: [5911, 5915, 504, 584, 2]

// Module 5910 (RegionalFeatureConfigStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import RegionalFeatureConfigModels from "RegionalFeatureConfigModels" /* 5915 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5911 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ getDefaultCountryCode: c2, getCountryCodeByAlpha2: c3 } = CountryCodeUtils);
let c4 = null;
let closure_5 = null;
const Store = get_initializedDefault.Store;
class RegionalFeatureConfigStore extends Store {
  getRegionalFeatureConfig() {
    return c4;
  }
  isFeatureAgeGated(arg0) {
    let flag;
    const obj = c4;
    if (c4 != null) {
      flag = obj.isFeatureAgeGated(arg0);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isSettingTeenByDefault(arg0) {
    let flag;
    const obj = c4;
    if (c4 != null) {
      flag = obj.isFeatureTeenByDefault(arg0);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  hasAgeGatedFeatures() {
    let flag;
    const obj = c4;
    if (c4 != null) {
      flag = obj.hasAgeGatedFeatures();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  hasTeenDefaults() {
    let flag;
    const obj = c4;
    if (c4 != null) {
      flag = obj.hasTeenDefaults();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  shouldCollectAppStoreSignal() {
    let flag;
    const obj = c4;
    if (c4 != null) {
      flag = obj.shouldCollectAppStoreSignal();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getUserCountryCode() {
    return closure_5;
  }
}
const prototype = RegionalFeatureConfigStore.prototype;
RegionalFeatureConfigStore.displayName = "RegionalFeatureConfigStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = _false(countryCode);
      if (tmp2 == null) {
        tmp2 = React2();
      }
      closure_5 = tmp2;
    }
    let fromConnectionOpenResult = null;
    if (null != countryCode.regionalFeatureConfig) {
      const RegionalFeatureConfig = RegionalFeatureConfigModels.RegionalFeatureConfig;
      fromConnectionOpenResult = RegionalFeatureConfig.fromConnectionOpen(countryCode.regionalFeatureConfig);
    }
    c4 = fromConnectionOpenResult;
  },
  SET_LOCATION_METADATA: function handleSetLocationMetadata(countryCode) {
    countryCode = countryCode.countryCode;
    if (null != countryCode) {
      let tmp2 = _false(countryCode);
      if (tmp2 == null) {
        tmp2 = React2();
      }
      closure_5 = tmp2;
    }
    return false;
  }
};
const regionalFeatureConfigStore = new RegionalFeatureConfigStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigStore.tsx");

export default regionalFeatureConfigStore;
