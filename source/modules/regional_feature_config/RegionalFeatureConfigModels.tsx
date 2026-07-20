// Module ID: 3813
// Function ID: 31689
// Name: SettingsConfig
// Dependencies: []

// Module 3813 (SettingsConfig)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class SettingsConfig {
    constructor(arg0) {
      tmp = SettingsConfig(this, SettingsConfig);
      this.teenByDefault = arg0;
      return;
    }
  }
  let closure_0 = SettingsConfig;
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
}();
const tmp3 = () => {
  class AgeVerificationConfig {
    constructor(arg0) {
      tmp = AgeVerificationConfig(this, AgeVerificationConfig);
      this.gatedFeatures = arg0;
      return;
    }
  }
  let closure_0 = AgeVerificationConfig;
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
}();
const tmp4 = () => {
  class RegionalFeatureConfig {
    constructor(arg0, arg1) {
      tmp = RegionalFeatureConfig(this, RegionalFeatureConfig);
      this.settings = arg0;
      this.ageVerification = arg1;
      return;
    }
  }
  let closure_0 = RegionalFeatureConfig;
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
        const tmp = new closure_2(teen_by_default_settings.teen_by_default_settings);
        const tmp2 = new closure_3(teen_by_default_settings.age_gated_features);
        return new RegionalFeatureConfig(tmp, new closure_3(teen_by_default_settings.age_gated_features));
      }
    }
  ];
  return callback(RegionalFeatureConfig, items, items1);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigModels.tsx");

export const SettingsConfig = tmp2;
export const AgeVerificationConfig = tmp3;
export const RegionalFeatureConfig = tmp4;
