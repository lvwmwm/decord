// Module ID: 13594
// Function ID: 103031
// Name: pressable
// Dependencies: []

// Module 13594 (pressable)
const _module = require(dependencyMap[2]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.jf5GGb);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(dependencyMap[1])(false);
  }
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
