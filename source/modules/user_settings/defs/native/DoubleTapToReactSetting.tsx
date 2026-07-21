// Module ID: 14428
// Function ID: 108803
// Name: toggle
// Dependencies: []

// Module 14428 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.4qhAjx);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = require(dependencyMap[3]).DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = require(dependencyMap[3]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = require(dependencyMap[3]).DoubleTapReactionEmoji;
    const obj = { disableDoubleTap: !disableDoubleTap };
    let emojiId;
    if (null != setting) {
      emojiId = setting.emojiId;
    }
    obj.emojiId = emojiId;
    let emojiName;
    if (null != setting) {
      emojiName = setting.emojiName;
    }
    obj.emojiName = emojiName;
    let animated;
    if (null != setting) {
      animated = setting.animated;
    }
    obj.animated = animated;
    DoubleTapReactionEmoji2.updateSetting(obj);
  }
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapToReactSetting.tsx");

export default toggle;
