// Module ID: 13943
// Function ID: 13944
// Dependencies: [8022, 4517, 3980, 10380, 1236, 2]

// Module 13943
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4517) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4517) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4517) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4517) /* useAgeVerificationRunner */;
    const obj3 = require(3980) /* isFeatureAgeGated */;
    return require(3980) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4517) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4517) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4517) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4517) /* useAgeVerificationRunner */;
    const obj3 = require(3980) /* isFeatureAgeGated */;
    return require(3980) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
