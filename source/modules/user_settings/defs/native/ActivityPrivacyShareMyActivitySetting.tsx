// Module ID: 14441
// Function ID: 108844
// Name: toggle
// Dependencies: []

// Module 14441 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).WhdCGP);
  },
  useDescription() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).UQ9RHJ);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require(dependencyMap[4]).ShowCurrentGame.useSetting,
  onValueChange: require(dependencyMap[4]).ShowCurrentGame.updateSetting
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
