// Module ID: 14089
// Function ID: 14090
// Dependencies: [8127, 4560, 4040, 10407, 1236, 2]

// Module 14089
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
    const isAgeVerified = require(4560) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4560) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4560) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4560) /* useAgeVerificationRunner */;
    const obj3 = require(4040) /* isFeatureAgeGated */;
    return require(4040) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
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
    const isAgeVerified = require(4560) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4560) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4560) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4560) /* useAgeVerificationRunner */;
    const obj3 = require(4040) /* isFeatureAgeGated */;
    return require(4040) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
