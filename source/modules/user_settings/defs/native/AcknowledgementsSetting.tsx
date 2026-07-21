// Module ID: 14248
// Function ID: 107682
// Name: pressable
// Dependencies: []

// Module 14248 (pressable)
const MarketingURLs = require(dependencyMap[0]).MarketingURLs;
const _module = require(dependencyMap[2]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.0nUKy3);
  },
  parent: null,
  IconComponent: require(dependencyMap[4]).CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    importDefault(dependencyMap[1]).openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;
