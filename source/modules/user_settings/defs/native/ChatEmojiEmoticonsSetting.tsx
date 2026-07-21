// Module ID: 14176
// Function ID: 107326
// Name: toggle
// Dependencies: []

// Module 14176 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.79qal8);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useValue: require(dependencyMap[3]).ConvertEmoticons.useSetting,
  onValueChange: require(dependencyMap[3]).ConvertEmoticons.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ChatEmojiEmoticonsSetting.tsx");

export default toggle;
