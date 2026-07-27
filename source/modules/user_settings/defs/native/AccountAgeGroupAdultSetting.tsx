// Module ID: 13734
// Function ID: 105442
// Dependencies: [7697, 4348, 3810, 10059, 1212, 2]

// Module 13734
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
    const isAgeVerified = require(4348) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4348) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4348) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4348) /* isReactiveCheckEnabled */;
    const obj3 = require(3810) /* isFeatureAgeGated */;
    return require(3810) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
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
    const isAgeVerified = require(4348) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4348) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4348) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4348) /* isReactiveCheckEnabled */;
    const obj3 = require(3810) /* isFeatureAgeGated */;
    return require(3810) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
