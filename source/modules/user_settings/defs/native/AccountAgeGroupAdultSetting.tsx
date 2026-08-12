// Module ID: 14080
// Function ID: 14081
// Dependencies: [8123, 4559, 4040, 10493, 1236, 2]

// Module 14080
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
    const isAgeVerified = require(4559) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4559) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4559) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4559) /* useAgeVerificationRunner */;
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
    const isAgeVerified = require(4559) /* useAgeVerificationRunner */.useIsAgeVerified();
    const obj = require(4559) /* useAgeVerificationRunner */;
    const isVerifiedTeen = require(4559) /* useAgeVerificationRunner */.useIsVerifiedTeen();
    const obj2 = require(4559) /* useAgeVerificationRunner */;
    const obj3 = require(4040) /* isFeatureAgeGated */;
    return require(4040) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
