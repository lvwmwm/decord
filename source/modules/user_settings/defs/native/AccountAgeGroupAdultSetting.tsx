// Module ID: 13778
// Function ID: 105615
// Dependencies: [7733, 4382, 3844, 10099, 1212, 2]

// Module 13778
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
    const isAgeVerified = require(4382) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4382) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4382) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4382) /* isReactiveCheckEnabled */;
    const obj3 = require(3844) /* isFeatureAgeGated */;
    return require(3844) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
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
    const isAgeVerified = require(4382) /* isReactiveCheckEnabled */.useIsAgeVerified();
    const obj = require(4382) /* isReactiveCheckEnabled */;
    const isVerifiedTeen = require(4382) /* isReactiveCheckEnabled */.useIsVerifiedTeen();
    const obj2 = require(4382) /* isReactiveCheckEnabled */;
    const obj3 = require(3844) /* isFeatureAgeGated */;
    return require(3844) /* isFeatureAgeGated */.useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
const result = require("isFeatureAgeGated").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
