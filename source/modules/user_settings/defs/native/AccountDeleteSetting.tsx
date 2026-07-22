// Module ID: 13599
// Function ID: 103053
// Name: pressable
// Dependencies: []

// Module 13599 (pressable)
const _module = require(dependencyMap[2]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.8lQ2rR);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    importDefault(dependencyMap[1])(true);
  }
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
