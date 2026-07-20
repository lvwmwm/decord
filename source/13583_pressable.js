// Module ID: 13583
// Function ID: 102975
// Name: pressable
// Dependencies: []

// Module 13583 (pressable)
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
