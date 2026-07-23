// Module ID: 13671
// Function ID: 104986
// Dependencies: [7662, 4347, 3809, 10095, 1212, 2]

// Module 13671
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4347) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4347) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4347) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4347) /* isReactiveCheckEnabled */;
    const obj3 = require(3809) /* isFeatureAgeGated */;
    return require(3809) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/52UYy"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(4347) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4347) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4347) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4347) /* isReactiveCheckEnabled */;
    const obj3 = require(3809) /* isFeatureAgeGated */;
    return require(3809) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
