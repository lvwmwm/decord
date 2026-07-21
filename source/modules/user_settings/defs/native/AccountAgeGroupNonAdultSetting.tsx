// Module ID: 13553
// Function ID: 102810
// Name: pressable
// Dependencies: []

// Module 13553 (pressable)
const _module = require(dependencyMap[6]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t./52UYy);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = require(dependencyMap[3]).useIsAgeVerified();
    const intl = require(dependencyMap[4]).intl;
    let stringResult = intl.string(require(dependencyMap[4]).t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = require(dependencyMap[4]).intl;
      stringResult = intl2.string(require(dependencyMap[4]).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    let obj = importDefault(dependencyMap[1]);
    obj = { entryPoint: require(dependencyMap[2]).AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = require(dependencyMap[3]).useIsAgeVerified();
    const obj = require(dependencyMap[3]);
    const isVerifiedTeen = require(dependencyMap[3]).useIsVerifiedTeen();
    const obj2 = require(dependencyMap[3]);
    let hasTeenDefaults = require(dependencyMap[5]).useHasTeenDefaults();
    if (hasTeenDefaults) {
      hasTeenDefaults = !isAgeVerified || isVerifiedTeen;
      const tmp4 = !isAgeVerified || isVerifiedTeen;
    }
    return hasTeenDefaults;
  }
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
