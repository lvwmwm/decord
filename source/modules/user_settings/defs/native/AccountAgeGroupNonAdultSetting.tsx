// Module ID: 13797
// Function ID: 13798
// Name: pressable
// Dependencies: [7753, 6744, 6746, 4405, 1236, 3868, 10116, 2]

// Module 13797 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require(4405) /* useShouldCallReactiveCheck */.useIsAgeVerified();
    const intl = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1236) /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = importDefault(6744);
    obj = { entryPoint: require(6746) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require(4405) /* useShouldCallReactiveCheck */.useIsAgeVerified();
    const obj = require(4405) /* useShouldCallReactiveCheck */;
    const isVerifiedTeen = require(4405) /* useShouldCallReactiveCheck */.useIsVerifiedTeen();
    const obj2 = require(4405) /* useShouldCallReactiveCheck */;
    let hasTeenDefaults = require(3868) /* isFeatureAgeGated */.useHasTeenDefaults();
    if (hasTeenDefaults) {
      let tmp4 = !isAgeVerified;
      if (isAgeVerified) {
        tmp4 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp4;
    }
    return hasTeenDefaults;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require(4405) /* useShouldCallReactiveCheck */.useIsAgeVerified();
    const intl = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1236) /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = importDefault(6744);
    obj = { entryPoint: require(6746) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require(4405) /* useShouldCallReactiveCheck */.useIsAgeVerified();
    const obj = require(4405) /* useShouldCallReactiveCheck */;
    const isVerifiedTeen = require(4405) /* useShouldCallReactiveCheck */.useIsVerifiedTeen();
    const obj2 = require(4405) /* useShouldCallReactiveCheck */;
    let hasTeenDefaults = require(3868) /* isFeatureAgeGated */.useHasTeenDefaults();
    if (hasTeenDefaults) {
      let tmp4 = !isAgeVerified;
      if (isAgeVerified) {
        tmp4 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp4;
    }
    return hasTeenDefaults;
  }
};
let result = require("AgeVerificationModalEntryPoint").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
