// Module ID: 14403
// Function ID: 108676
// Name: pressable
// Dependencies: []

// Module 14403 (pressable)
const MarketingURLs = require(dependencyMap[1]).MarketingURLs;
const _module = require(dependencyMap[3]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.KGFTww);
  },
  parent: require(dependencyMap[0]).MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    importDefault(dependencyMap[2]).openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;
