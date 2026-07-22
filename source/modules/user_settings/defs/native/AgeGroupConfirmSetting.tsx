// Module ID: 13561
// Function ID: 102848
// Name: pressable
// Dependencies: []

// Module 13561 (pressable)
const _module = require(dependencyMap[3]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(importDefault(dependencyMap[5]).SH6Tcv);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(importDefault(dependencyMap[5]).rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    let obj = importDefault(dependencyMap[1]);
    obj = { entryPoint: require(dependencyMap[2]).AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
  usePredicate: require(dependencyMap[6]).useShowAssignedAgeGroupSettings
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
