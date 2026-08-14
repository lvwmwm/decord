// Module ID: 14096
// Function ID: 14097
// Name: pressable
// Dependencies: [8148, 7863, 7865, 4582, 1236, 4040, 10421, 2]

// Module 14096 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require(4582) /* useAgeVerificationRunner */.useIsAgeVerified();
    const intl = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1236) /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = importDefault(7863);
    obj = { entryPoint: require(7865) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require(4582) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4582) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4582) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4582) /* useAgeVerificationRunner */;
    let hasTeenDefaults = require(4040) /* isFeatureAgeGated */.useHasTeenDefaults();
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
    const isAgeVerified = require(4582) /* useAgeVerificationRunner */.useIsAgeVerified();
    const intl = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1236) /* getSystemLocale */.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1236).intl;
      stringResult = intl2.string(tmp(1236).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = importDefault(7863);
    obj = { entryPoint: require(7865) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require(4582) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4582) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4582) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4582) /* useAgeVerificationRunner */;
    let hasTeenDefaults = require(4040) /* isFeatureAgeGated */.useHasTeenDefaults();
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
