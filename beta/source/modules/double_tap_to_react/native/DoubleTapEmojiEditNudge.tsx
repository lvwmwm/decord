// Module ID: 11233
// Function ID: 11234
// Name: DoubleTapEmojiEditNudge
// Dependencies: [5, 19, 17, 4825, 1480, 1074, 1375, 21, 4836, 576, 2021, 7410, 1482, 504, 1397, 10583, 1241, 10586, 4832, 1115, 6551, 5435, 2]
// Exports: DoubleTapEmojiEditNudge

// Module 11233 (DoubleTapEmojiEditNudge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7410 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import DimensionsStore from "DimensionsStore" /* 1480 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3, c4, closure_2, dependencyMap;

let c10;
let c9;
let closure_12;
let unpackModuleId;
function DoubleTapEmojiEditNudgeInner(location) {
  let Text2;
  let intl;
  let intl2;
  let items3;
  let obj7;
  let str;
  let useReducedMotion;
  const _location = location.location;
  const emoji = location.emoji;
  let tmp = _location;
  let obj = _location(1482);
  dependencyMap = obj.useAppEntryKey();
  const tmp3 = DimensionsStore((arg0) => arg0.byAppEntry[closure_2].fontScale);
  let obj2 = _location(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = closure_14(tmp3);
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = react.useMemo(() => {
    let animated;
    let url;
    if (null != emoji.id) {
      const obj = { id: emoji.id, size, animated };
      animated = !stateFromStores;
      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
      AvatarUtilsDefault;
      if (!stateFromStores) {
        animated = tmp.animated;
      }
      url = getEmojiURL(obj);
    } else {
      url = tmp.url;
    }
    return url;
  }, items1);
  let obj3 = { style: tmp5.doubleTapEmojiEditNudgeContainer, children: items3 };
  const callback = react.useCallback(() => {
    const tmp = _location(closure_2[15]);
    let obj = {
      pickerIntention: constants.DEFAULT_REACT_EMOJI,
      onPressEmoji: function() {
        return closure_0(...arguments);
      },
      startExpanded: true
    };
    const openEmojiPickerActionSheet = tmp.openEmojiPickerActionSheet;
    let closure_0 = stateFromStores(function*(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp;
              let closure_1 = tmp4;
              const obj4 = { emoji_id: null, emoji_name: null, emoji_animated: null, recommended: false, location: emoji };
              ({ id: obj8.emoji_id, name: obj8.emoji_name, animated: obj8.emoji_animated } = emoji);
              const obj7 = emoji(closure_2_2[16]);
              obj7.track(constants.DOUBLE_TAP_REACT_EMOJI_UPDATED, obj4);
              const DoubleTapReactionEmoji = emoji(closure_2_2[10]).DoubleTapReactionEmoji;
              const obj5 = { emojiId: null, emojiName: null, animated: null, disableDoubleTap: false };
              ({ id: obj9.emojiId, name: obj9.emojiName, animated: obj9.animated } = emoji);
              c3 = 1;
              c4 = 1;
              const obj6 = { value: DoubleTapReactionEmoji.updateSetting(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            const obj17 = { emoji };
            const obj = emoji(closure_2_2[17]);
            const result = obj.showDoubleTapEmojiUpdatedToast(obj17);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    });
    let result = openEmojiPickerActionSheet(obj, "stack");
  }, items2);
  let obj4 = { color: "text-subtle", variant: "text-sm/normal", children: intl.string(_location(1115).t["1EUr/W"]) };
  const Text = _location(4832).Text;
  intl = _location(1115).intl;
  items3 = [closure_11(Text, obj4), , ];
  let obj5 = { style: tmp5.doubleTapEmojiContainer, fastImageStyle: tmp5.doubleTapCustomEmoji, textEmojiStyle: tmp5.doubleTapTextEmoji, src: memo, name: str };
  str = "";
  const tmp11 = emoji(6551);
  const tmp8 = closure_12;
  const tmp9 = View;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  items3[1] = closure_11(tmp11, obj5);
  let obj6 = { accessibilityRole: "button", onPress: callback, hitSlop, style: tmp5.editButton, children: closure_11(Text2, obj7) };
  const PressableOpacity = tmp(5435).PressableOpacity;
  obj7 = { color: "text-brand", variant: "text-sm/normal", children: intl2.string(tmp(1115).t.bt75uw) };
  Text2 = tmp(4832).Text;
  intl2 = tmp(1115).intl;
  items3[2] = closure_11(PressableOpacity, obj6);
  return tmp8(tmp9, obj3);
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ EMOJI_URL_BASE_SIZE: c9, EmojiIntention: c10 } = EmojiConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const hitSlop = { left: 8, right: 8 };
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { doubleTapEmojiContainer: { marginHorizontal: nativeDefault.space.PX_4 }, doubleTapTextEmoji: { fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, doubleTapCustomEmoji: size, doubleTapEmojiEditNudgeContainer: { marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }, editButton: { marginHorizontal: nativeDefault.space.PX_4 } };
  ({ marginHorizontal: nativeDefault.space.PX_4 });
  size = { height: 16 * arg0, width: 16 * arg0 };
  ({ fontSize: 12 * arg0, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  ({ marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" });
  ({ marginHorizontal: nativeDefault.space.PX_4 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = function DoubleTapEmojiEditNudge(location) {
  const _location = location.location;
  let setting;
  const DoubleTapReactionEmoji = setting(2021).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = DoubleTapToReactUtils;
    return obj.disambiguatedEmojiFromSettingsValue(setting);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = setting(dependencyMap[11]);
    return obj.getFallbackDoubleTapDisambiguatedEmoji();
  }, []);
  const items1 = [setting];
  let tmp4 = null;
  if (true !== setting.disableDoubleTap) {
    if (!react.useMemo(() => {
      let emojiId;
      let emojiName;
      ({ emojiId, emojiName } = setting);
      let tmp = null != emojiId && "0" !== emojiId;
      if (!tmp) {
        tmp = null != emojiName && "" !== emojiName;
        const tmp2 = null != emojiName && "" !== emojiName;
      }
      return tmp;
    }, items1)) {
      let tmp7;
      if (null != memo1) {
        let obj = { location: _location, emoji: memo1 };
        tmp7 = closure_11(DoubleTapEmojiEditNudgeInner, obj);
      }
      tmp4 = tmp7;
    }
    let tmp8 = null;
    if (null != memo) {
      const obj2 = { location: _location, emoji: memo };
      tmp8 = closure_11(DoubleTapEmojiEditNudgeInner, obj2);
    }
    tmp7 = tmp8;
  }
  return tmp4;
};
