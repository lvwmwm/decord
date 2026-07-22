// Module ID: 14255
// Function ID: 107695
// Name: pressable
// Dependencies: []

// Module 14255 (pressable)
const _module = require(dependencyMap[0]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.Yl/Riu);
  },
  parent: null,
  IconComponent: require(dependencyMap[2]).CircleQuestionIcon,
  onPress: require(dependencyMap[3]).emailSupport,
  withArrow: true
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
