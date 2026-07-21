// Module ID: 13550
// Function ID: 102797
// Dependencies: []

// Module 13550
const _module = require(dependencyMap[3]);
const obj = {
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t./52UYy);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(dependencyMap[1]).useIsAgeVerified();
    const obj = require(dependencyMap[1]);
    const isVerifiedTeen = require(dependencyMap[1]).useIsVerifiedTeen();
    const obj2 = require(dependencyMap[1]);
    const obj3 = require(dependencyMap[2]);
    return require(dependencyMap[2]).useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
};
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default _module.createStatic({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t./52UYy);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = require(dependencyMap[1]).useIsAgeVerified();
    const obj = require(dependencyMap[1]);
    const isVerifiedTeen = require(dependencyMap[1]).useIsVerifiedTeen();
    const obj2 = require(dependencyMap[1]);
    const obj3 = require(dependencyMap[2]);
    return require(dependencyMap[2]).useHasAgeGatedFeatures() && isAgeVerified && !isVerifiedTeen;
  }
});
