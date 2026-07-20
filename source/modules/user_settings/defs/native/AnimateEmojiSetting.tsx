// Module ID: 14118
// Function ID: 107188
// Name: toggle
// Dependencies: []

// Module 14118 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.iIaOlc);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCESSIBILITY,
  useValue: require(dependencyMap[3]).AnimateEmoji.useSetting,
  onValueChange: require(dependencyMap[3]).AnimateEmoji.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AnimateEmojiSetting.tsx");

export default toggle;
