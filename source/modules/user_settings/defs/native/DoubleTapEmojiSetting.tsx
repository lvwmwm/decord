// Module ID: 14549
// Function ID: 110988
// Name: SettingsEmoji
// Dependencies: [5, 31, 7662, 653, 1852, 33, 4130, 689, 3803, 7656, 1392, 5151, 9326, 675, 5484, 9339, 10095, 1212, 2]

// Module 14549 (SettingsEmoji)
import jsxProd from "jsxProd";
import "result";
import { AnalyticEvents } from "ME";
import { EmojiIntention } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import createToggle from "createToggle";

const require = arg1;
function SettingsEmoji(emoji) {
  emoji = emoji.emoji;
  if (null != emoji.id) {
    let obj = importDefault(1392);
    obj = { id: emoji.id, size: 24, animated: false };
    let url = obj.getEmojiURL(obj);
  } else {
    url = emoji.url;
  }
  obj = { fastImageStyle: { height: 24, width: 24 }, src: url };
  let str = "";
  const tmp = _createForOfIteratorHelperLoose();
  const tmp4 = jsx;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj.name = str;
  obj.adjustsFontSizeToFit = true;
  obj.textEmojiStyle = tmp.textEmoji;
  return tmp4(importDefault(5151), obj);
}
function useDoubleTapDisabled() {
  const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
  const disableDoubleTap = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  return null != disableDoubleTap && disableDoubleTap;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.textEmoji = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["96WKNB"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = require(7656) /* getFallbackDoubleTapDisambiguatedEmoji */;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = require(7656) /* getFallbackDoubleTapDisambiguatedEmoji */.getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        obj = { emoji: fallbackDoubleTapDisambiguatedEmoji };
        let tmp4 = <SettingsEmoji emoji={fallbackDoubleTapDisambiguatedEmoji} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      obj = { emoji: result };
      tmp4 = <SettingsEmoji emoji={result} />;
    }
  },
  onPress: function onPressSetting() {
    let obj = _require(9326);
    obj = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI };
    // CreateGeneratorClosureLongIndex (0x67)
    _require = callback(tmp);
    obj.onPressEmoji = function() {
      return callback(...arguments);
    };
    obj.startExpanded = true;
    const result = obj.openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = require(7656) /* getFallbackDoubleTapDisambiguatedEmoji */.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: useDoubleTapDisabled,
  usePredicate: function useShouldShowSetting() {
    return !useDoubleTapDisabled();
  }
});
const obj1 = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["96WKNB"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = require(7656) /* getFallbackDoubleTapDisambiguatedEmoji */;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = require(7656) /* getFallbackDoubleTapDisambiguatedEmoji */.getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        obj = { emoji: fallbackDoubleTapDisambiguatedEmoji };
        let tmp4 = <SettingsEmoji emoji={fallbackDoubleTapDisambiguatedEmoji} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      obj = { emoji: result };
      tmp4 = <SettingsEmoji emoji={result} />;
    }
  },
  onPress: function onPressSetting() {
    let obj = _require(9326);
    obj = { pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI };
    // CreateGeneratorClosureLongIndex (0x67)
    _require = callback(tmp);
    obj.onPressEmoji = function() {
      return callback(...arguments);
    };
    obj.startExpanded = true;
    const result = obj.openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = require(7656) /* getFallbackDoubleTapDisambiguatedEmoji */.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: useDoubleTapDisabled,
  usePredicate: function useShouldShowSetting() {
    return !useDoubleTapDisabled();
  }
};
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;
