// Module ID: 14610
// Function ID: 111438
// Name: SettingsEmoji
// Dependencies: [5, 31, 7697, 653, 1853, 33, 4131, 689, 3804, 7691, 1392, 5150, 9268, 675, 5482, 9281, 10059, 1212, 2]

// Module 14610 (SettingsEmoji)
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
  return tmp4(importDefault(5150), obj);
}
function useDoubleTapDisabled() {
  const DoubleTapReactionEmoji = require(3804) /* explicitContentFromProto */.DoubleTapReactionEmoji;
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
    const DoubleTapReactionEmoji = require(3804) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = require(7691) /* getFallbackDoubleTapDisambiguatedEmoji */;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = require(7691) /* getFallbackDoubleTapDisambiguatedEmoji */.getFallbackDoubleTapDisambiguatedEmoji();
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
    let obj = _require(9268);
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
    const DoubleTapReactionEmoji = require(3804) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = require(7691) /* getFallbackDoubleTapDisambiguatedEmoji */.disambiguatedEmojiFromSettingsValue(setting);
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
    const DoubleTapReactionEmoji = require(3804) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    let obj = require(7691) /* getFallbackDoubleTapDisambiguatedEmoji */;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const fallbackDoubleTapDisambiguatedEmoji = require(7691) /* getFallbackDoubleTapDisambiguatedEmoji */.getFallbackDoubleTapDisambiguatedEmoji();
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
    let obj = _require(9268);
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
    const DoubleTapReactionEmoji = require(3804) /* explicitContentFromProto */.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const result = require(7691) /* getFallbackDoubleTapDisambiguatedEmoji */.disambiguatedEmojiFromSettingsValue(setting);
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
