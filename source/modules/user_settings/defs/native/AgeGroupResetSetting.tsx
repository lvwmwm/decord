// Module ID: 13562
// Function ID: 102852
// Name: pressable
// Dependencies: []

// Module 13562 (pressable)
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(importDefault(dependencyMap[4]).bD//cU);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(importDefault(dependencyMap[4]).Gn0SAj);
  },
  onPress() {
    require(dependencyMap[6]).openAlert(require(dependencyMap[5]).SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(require(dependencyMap[5]).default, {}));
  },
  withArrow: true,
  usePredicate: require(dependencyMap[7]).useShowAssignedAgeGroupSettings
});
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
