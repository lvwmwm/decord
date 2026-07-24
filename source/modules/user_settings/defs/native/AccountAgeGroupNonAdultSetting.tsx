// Module ID: 13725
// Function ID: 105323
// Name: pressable
// Dependencies: [7751, 7581, 7583, 4347, 1212, 3809, 10127, 2]

// Module 13725 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require(4347) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const intl = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1212) /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = importDefault(7581);
    obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require(4347) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4347) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4347) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4347) /* isReactiveCheckEnabled */;
    let hasTeenDefaults = require(3809) /* isFeatureAgeGated */.useHasTeenDefaults();
    if (hasTeenDefaults) {
      hasTeenDefaults = !isAgeVerified || isVerifiedTeen;
      const tmp4 = !isAgeVerified || isVerifiedTeen;
    }
    return hasTeenDefaults;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require(4347) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const intl = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1212) /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = importDefault(7581);
    obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require(4347) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4347) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4347) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4347) /* isReactiveCheckEnabled */;
    let hasTeenDefaults = require(3809) /* isFeatureAgeGated */.useHasTeenDefaults();
    if (hasTeenDefaults) {
      hasTeenDefaults = !isAgeVerified || isVerifiedTeen;
      const tmp4 = !isAgeVerified || isVerifiedTeen;
    }
    return hasTeenDefaults;
  }
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
