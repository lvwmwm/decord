// Module ID: 14125
// Function ID: 14126
// Dependencies: [8198, 4992, 4072, 10669, 1236, 2]

// Module 14125
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4992) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4992) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4992) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4992) /* useAgeVerificationRunner */;
    const obj3 = require(4072) /* isFeatureAgeGated */;
    return require(4072) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4992) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4992) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4992) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4992) /* useAgeVerificationRunner */;
    const obj3 = require(4072) /* isFeatureAgeGated */;
    return require(4072) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
