// Module ID: 14175
// Function ID: 107324
// Name: toggle
// Dependencies: []

// Module 14175 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.zge/fP);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useValue: require(dependencyMap[3]).RenderReactions.useSetting,
  onValueChange: require(dependencyMap[3]).RenderReactions.updateSetting
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/EmojiReactionsOnMessagesSetting.tsx");

export default toggle;
