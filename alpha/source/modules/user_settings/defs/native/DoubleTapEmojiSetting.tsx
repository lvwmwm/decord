// Module ID: 17919
// Function ID: 17920
// Name: DoubleTapEmojiSetting
// Dependencies: [5, 19, 8432, 1072, 1386, 21, 5014, 575, 4839, 8426, 1409, 7300, 9939, 1252, 7351, 9951, 11539, 1113, 2]

// Module 17919 (DoubleTapEmojiSetting)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import EmojiConstants from "EmojiConstants" /* 1386 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import UserSettings from "UserSettings" /* 4839 */;
import EmojiDefault from "Emoji" /* 7300 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 8426 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, constants;

let obj2;
function SettingsEmoji(emoji) {
  let str;
  let url;
  emoji = emoji.emoji;
  const tmp = closure_7();
  if (null != emoji.id) {
    const obj2 = { id: emoji.id, size: 24, animated: false };
    const obj = AvatarUtilsDefault;
    url = obj.getEmojiURL(obj2);
  } else {
    url = emoji.url;
  }
  const obj3 = { fastImageStyle: { height: 24, width: 24 }, src: url, name: str, adjustsFontSizeToFit: true, textEmojiStyle: tmp.textEmoji };
  str = "";
  const tmp4 = jsx;
  const tmp5 = EmojiDefault;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  return tmp4(tmp5, obj3);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let obj = { textEmoji: obj2 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_7 = createStyles.createStyles(obj);
let obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["96WKNB"]);
  },
  parent: MobileUserSettings.CHAT,
  useTrailing: function useDoubleTapEmojiSettingTrailing() {
    let tmp4;
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const obj = DoubleTapToReactUtils;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    const obj2 = DoubleTapToReactUtils;
    const fallbackDoubleTapDisambiguatedEmoji = obj2.getFallbackDoubleTapDisambiguatedEmoji();
    if (null == result) {
      if (null != fallbackDoubleTapDisambiguatedEmoji) {
        tmp4 = <SettingsEmoji emoji={fallbackDoubleTapDisambiguatedEmoji} />;
      }
      return tmp4;
    }
    tmp4 = null;
    if (null != result) {
      tmp4 = <SettingsEmoji emoji={result} />;
    }
  },
  onPress: function onPressSetting() {
    let closure_0;
    const tmp = require("openEmojiPickerActionSheet");
    let obj = {
      pickerIntention: EmojiIntention.DEFAULT_REACT_EMOJI,
      onPressEmoji() {
        return closure_0(...arguments);
      },
      startExpanded: true
    };
    const openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
    _require = _asyncToGenerator(async (emoji) => {
      let closure_1;
      let c3 = 0;
      let c4 = 0;
      return (async (arg0, value) => {
        if (constants === 2) {
          constants = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            constants = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                constants = 3;
                throw value;
              } else if (arg0 === 2) {
                constants = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp4;
                ({ id: obj7.emoji_id, name: obj7.emoji_name, animated: obj7.emoji_animated } = emoji);
                const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: tmp(closure_2[14]).USER_SETTINGS };
                const track = tmp(closure_2[13]).track;
                const DOUBLE_TAP_REACT_EMOJI_UPDATED = constants.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                tmp(closure_2[13]);
                track(DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
                const DoubleTapReactionEmoji = emoji(closure_2[8]).DoubleTapReactionEmoji;
                const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
                ({ id: obj8.emojiId, name: obj8.emojiName, animated: obj8.animated } = emoji);
                c3 = 1;
                constants = 1;
                const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              return { value, done: true };
            } else {
              const obj16 = { emoji };
              const obj = emoji(closure_2[15]);
              const result = obj.showDoubleTapEmojiUpdatedToast(obj16);
              constants = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp11) {
            constants = 3;
            throw tmp11;
          }
        }
      })();
    });
    let result = openEmojiPickerActionSheet(obj);
  },
  withArrow: true,
  useDescription: function useDoubleTapEmojiDescription() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.useSetting();
    const obj = DoubleTapToReactUtils;
    const result = obj.disambiguatedEmojiFromSettingsValue(setting);
    let combined = null;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result.name + ":";
    }
    return combined;
  },
  useIsDisabled: function useDoubleTapDisabled() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  usePredicate: function useShouldShowSetting() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    let flag = DoubleTapReactionEmoji.useSetting().disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    return !flag;
  }
};
const pressable = SettingBuilders.createPressable(obj3);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapEmojiSetting.tsx");

export default pressable;
