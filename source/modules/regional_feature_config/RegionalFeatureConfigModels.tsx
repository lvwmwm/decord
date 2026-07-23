// Module ID: 3815
// Function ID: 31701
// Name: SettingsConfig
// Dependencies: [6, 7, 2]

// Module 3815 (SettingsConfig)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let tmp2 = (() => {
  class SettingsConfig {
    constructor(arg0) {
      tmp = SettingsConfig(this, SettingsConfig);
      this.teenByDefault = arg0;
      return;
    }
  }
  let obj = {
    key: "isFeatureTeenByDefault",
    value(arg0) {
      return this.teenByDefault & arg0;
    }
  };
  const items = [obj, ];
  obj = {
    key: "hasTeenDefaults",
    value() {
      const teenByDefault = this.teenByDefault;
      let num = 0;
      if (null != teenByDefault) {
        num = teenByDefault;
      }
      return 0 !== num;
    }
  };
  items[1] = obj;
  return callback(SettingsConfig, items);
})();
let closure_2 = tmp2;
const tmp3 = (() => {
  class AgeVerificationConfig {
    constructor(arg0) {
      tmp = AgeVerificationConfig(this, AgeVerificationConfig);
      this.gatedFeatures = arg0;
      return;
    }
  }
  let obj = {
    key: "isFeatureAgeGated",
    value(arg0) {
      return this.gatedFeatures & arg0;
    }
  };
  const items = [obj, ];
  obj = {
    key: "hasAgeGatedFeatures",
    value() {
      const gatedFeatures = this.gatedFeatures;
      let num = 0;
      if (null != gatedFeatures) {
        num = gatedFeatures;
      }
      return 0 !== num;
    }
  };
  items[1] = obj;
  return callback(AgeVerificationConfig, items);
})();
let closure_3 = tmp3;
const tmp4 = (() => {
  class RegionalFeatureConfig {
    constructor(arg0, arg1) {
      tmp = RegionalFeatureConfig(this, RegionalFeatureConfig);
      this.settings = arg0;
      this.ageVerification = arg1;
      return;
    }
  }
  let obj = {
    key: "isFeatureAgeGated",
    value(AGE_GATED_SPACES) {
      const ageVerification = this.ageVerification;
      return ageVerification.isFeatureAgeGated(AGE_GATED_SPACES);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isFeatureTeenByDefault",
    value(arg0) {
      const settings = this.settings;
      return settings.isFeatureTeenByDefault(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "hasAgeGatedFeatures",
    value() {
      const ageVerification = this.ageVerification;
      return ageVerification.hasAgeGatedFeatures();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasTeenDefaults",
    value() {
      const settings = this.settings;
      return settings.hasTeenDefaults();
    }
  };
  const items1 = [
    {
      key: "fromConnectionOpen",
      value(teen_by_default_settings) {
        const tmp = new outer1_2(teen_by_default_settings.teen_by_default_settings);
        const tmp2 = new outer1_3(teen_by_default_settings.age_gated_features);
        return new RegionalFeatureConfig(tmp, new outer1_3(teen_by_default_settings.age_gated_features));
      }
    }
  ];
  return callback(RegionalFeatureConfig, items, items1);
})();
const result = require("set").fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigModels.tsx");

export const SettingsConfig = tmp2;
export const AgeVerificationConfig = tmp3;
export const RegionalFeatureConfig = tmp4;
