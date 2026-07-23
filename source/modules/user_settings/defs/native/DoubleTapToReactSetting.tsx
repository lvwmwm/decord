// Module ID: 14550
// Function ID: 110999
// Name: toggle
// Dependencies: [7662, 10095, 1212, 3803, 2]

// Module 14550 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["4qhAjx"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
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
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["4qhAjx"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
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
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DoubleTapToReactSetting.tsx");

export default toggle;
