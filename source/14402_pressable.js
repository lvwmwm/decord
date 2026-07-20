// Module ID: 14402
// Function ID: 108673
// Name: pressable
// Dependencies: []

// Module 14402 (pressable)
const MarketingURLs = require(dependencyMap[1]).MarketingURLs;
const _module = require(dependencyMap[3]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.lfC1KR);
  },
  parent: require(dependencyMap[0]).MobileSetting.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(dependencyMap[2]).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
