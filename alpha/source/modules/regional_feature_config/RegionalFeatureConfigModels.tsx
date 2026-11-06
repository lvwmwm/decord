// Module ID: 5853
// Function ID: 5854
// Name: RegionalFeatureConfigModels
// Dependencies: [5854, 2]

// Module 5853 (RegionalFeatureConfigModels)
import MediaTakedownRegulation from "MediaTakedownRegulation" /* 5854 */;
import size from "module_2" /* 2 */;

class SettingsConfig {
  constructor(teenByDefault) {
    const obj = Object.create(new.target.prototype);
    obj.teenByDefault = teenByDefault;
    return obj;
  }
  isFeatureTeenByDefault(arg0) {
    return this.teenByDefault & arg0;
  }
  hasTeenDefaults() {
    let num = this.teenByDefault;
    if (num == null) {
      num = 0;
    }
    return 0 !== num;
  }
}
const prototype = SettingsConfig.prototype;
class AgeVerificationConfig {
  constructor(gatedFeatures) {
    const obj = Object.create(new.target.prototype);
    obj.gatedFeatures = gatedFeatures;
    return obj;
  }
  isFeatureAgeGated(arg0) {
    return this.gatedFeatures & arg0;
  }
  hasAgeGatedFeatures() {
    let num = this.gatedFeatures;
    if (num == null) {
      num = 0;
    }
    return 0 !== num;
  }
}
const prototype2 = AgeVerificationConfig.prototype;
class AppStoreConfig {
  constructor(shouldCollectSignal) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let flag2 = arg2;
    if (arg2 === undefined) {
      flag2 = false;
    }
    const obj = Object.create(new.target.prototype);
    obj.shouldCollectSignal = shouldCollectSignal;
    obj.consentRevokedIOS = flag;
    obj.consentRevokedAndroid = flag2;
    return obj;
  }
}
class MediaTakedownConfig {
  constructor(regulation) {
    const obj = Object.create(new.target.prototype);
    obj.regulation = regulation;
    return obj;
  }
  isRegulation(arg0) {
    return this.regulation === arg0;
  }
}
const prototype3 = MediaTakedownConfig.prototype;
class RegionalFeatureConfig {
  constructor(settings, ageVerification, appStore, mediaTakedown) {
    const obj = Object.create(new.target.prototype);
    obj.settings = settings;
    obj.ageVerification = ageVerification;
    obj.appStore = appStore;
    obj.mediaTakedown = mediaTakedown;
    return obj;
  }
  isFeatureAgeGated(arg0) {
    const ageVerification = this.ageVerification;
    return ageVerification.isFeatureAgeGated(arg0);
  }
  isFeatureTeenByDefault(arg0) {
    const settings = this.settings;
    return settings.isFeatureTeenByDefault(arg0);
  }
  hasAgeGatedFeatures() {
    const ageVerification = this.ageVerification;
    return ageVerification.hasAgeGatedFeatures();
  }
  hasTeenDefaults() {
    const settings = this.settings;
    return settings.hasTeenDefaults();
  }
  shouldCollectAppStoreSignal() {
    return this.appStore.shouldCollectSignal;
  }
  isMediaTakedownRegulation(arg0) {
    const mediaTakedown = this.mediaTakedown;
    return mediaTakedown.isRegulation(arg0);
  }
  isAppStoreConsentRevoked(arg0) {
    let consentRevokedAndroid;
    const self = this;
    if ("ios" === arg0) {
      consentRevokedAndroid = self.appStore.consentRevokedIOS;
    } else {
      consentRevokedAndroid = self.appStore.consentRevokedAndroid;
    }
    return consentRevokedAndroid;
  }
  static fromConnectionOpen(regionalFeatureConfig) {
    const media_takedown_regulation = regionalFeatureConfig.media_takedown_regulation;
    if (typeof SettingsConfig === "function") {
      const obj6 = Object.create(SettingsConfig.prototype);
      obj6.teenByDefault = tmp2;
      const self = this;
      if (typeof AgeVerificationConfig === "function") {
        const obj7 = Object.create(AgeVerificationConfig.prototype);
        obj7.gatedFeatures = tmp4;
        const self2 = this;
        if (typeof AppStoreConfig === "function") {
          const tmp10 = true === tmp7;
          const tmp11 = true === tmp8;
          const tmp12 = true === tmp9;
          const obj8 = Object.create(tmp6.prototype);
          obj8.shouldCollectSignal = tmp10;
          obj8.consentRevokedIOS = tmp11;
          obj8.consentRevokedAndroid = tmp12;
          let tmp17 = null;
          const obj = MediaTakedownRegulation;
          if (obj.isMediaTakedownRegulation(media_takedown_regulation)) {
            tmp17 = media_takedown_regulation;
          }
          const self3 = this;
          if (typeof MediaTakedownConfig === "function") {
            const obj9 = Object.create(MediaTakedownConfig.prototype);
            obj9.regulation = tmp17;
            const self4 = this;
            if (typeof RegionalFeatureConfig === "function") {
              const obj10 = Object.create(RegionalFeatureConfig.prototype);
              obj10.settings = obj6;
              obj10.ageVerification = obj7;
              obj10.appStore = obj8;
              obj10.mediaTakedown = obj9;
              return obj10;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype4 = RegionalFeatureConfig.prototype;
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigModels.tsx");

export { SettingsConfig };
export { AgeVerificationConfig };
export { AppStoreConfig };
export { MediaTakedownConfig };
export { RegionalFeatureConfig };
