// Module ID: 9653
// Function ID: 9654
// Name: DoubleTapEmojiUpdatedToast
// Dependencies: [19, 4826, 1381, 21, 4837, 588, 1370, 558, 576, 504, 1403, 6552, 1127, 4833, 5267, 4545, 4531, 2]
// Exports: showDoubleTapEmojiUpdatedToast

// Module 9653 (DoubleTapEmojiUpdatedToast)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import EmojiConstants from "EmojiConstants" /* 1381 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1403 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import Text_Text from "Text/Text" /* 4833 */;
import EmojiDefault from "Emoji" /* 6552 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import createStyles_mod from "createStyles" /* 4837 */;
import PlatformUtils_mod from "PlatformUtils" /* 1370 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let num2;
let obj2;
let obj3;
let obj4;
let tmp;
const get_initialized = tmp(504);
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { toastEmoji: obj2, toastEmojiCustom: { width: 24, height: 24 }, toastEmojiText: obj3, toastText: obj4 };
obj2 = { marginLeft: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 16;
if (PlatformUtils.isIOS()) {
  num = 24;
}
obj3 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj4 = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let animated;
  let tmp4;
  let tmp5;
  let url;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(13);
  emoji = emoji.emoji;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_7();
  if (cResult[2] === emoji.animated) {
    if (cResult[3] === emoji.id) {
      if (cResult[4] === emoji.url) {
        let tmp9;
        if (cResult[5] === stateFromStores) {
          tmp9 = cResult[6];
        }
        let str = "";
        if (null == emoji.id) {
          str = emoji.surrogates;
        }
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp8.toastEmoji) {
            if (cResult[9] === tmp8.toastEmojiCustom) {
              if (cResult[10] === tmp8.toastEmojiText) {
                let tmp14;
                if (cResult[11] === str) {
                  tmp14 = cResult[12];
                }
                return tmp14;
              }
            }
          }
        }
        ({ toastEmoji: obj4.style, toastEmojiCustom: obj4.fastImageStyle, toastEmojiText: obj4.textEmojiStyle } = tmp8);
        const tmp17 = jsx(EmojiDefault, { style: null, fastImageStyle: null, textEmojiStyle: null, name: str, src: tmp9 });
        cResult[7] = tmp9;
        cResult[8] = tmp8.toastEmoji;
        cResult[9] = tmp8.toastEmojiCustom;
        cResult[10] = tmp8.toastEmojiText;
        cResult[11] = str;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
    }
  }
  if (null != emoji.id) {
    const obj3 = { id: emoji.id, animated, size: EMOJI_URL_BASE_SIZE };
    animated = !stateFromStores;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    url = getEmojiURL(obj3);
  } else {
    url = emoji.url;
  }
  cResult[2] = emoji.animated;
  cResult[3] = emoji.id;
  cResult[4] = emoji.url;
  cResult[5] = stateFromStores;
  cResult[6] = url;
  tmp9 = url;
}) : ((emoji) => {
  let str;
  let useReducedMotion;
  emoji = emoji.emoji;
  let obj = emoji(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2 = closure_7();
  const items1 = [emoji, stateFromStores];
  const memo = react.useMemo(() => {
    let animated;
    let url;
    if (null != emoji.id) {
      const obj = { id: emoji.id, animated, size: EMOJI_URL_BASE_SIZE };
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
  const tmp4 = jsx;
  const obj2 = { style: tmp2.toastEmoji, fastImageStyle: tmp2.toastEmojiCustom, textEmojiStyle: tmp2.toastEmojiText, name: str, src: memo };
  str = "";
  const tmp5 = stateFromStores(6552);
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  return tmp4(tmp5, obj2);
});
let closure_8 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  emoji = emoji.emoji;
  const tmp4 = closure_7();
  const toastText = tmp4.toastText;
  if (cResult[0] !== emoji.name) {
    const intl = tmp(1127).intl;
    const obj2 = { emojiName: emoji.name };
    const formatResult = intl.format(intl2.t.nKY0Fl, obj2);
    cResult[0] = emoji.name;
    cResult[1] = formatResult;
    tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.toastText) {
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: toastText, children: tmp5 });
  cResult[2] = tmp4.toastText;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((emoji) => {
  emoji = emoji.emoji;
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const obj2 = { emojiName: emoji.name };
  return <Text variant="text-sm/normal" style={closure_7().toastText}>{intl.format(intl2.t.nKY0Fl, obj2)}</Text>;
});
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export const ToastEmoji = tmp3;
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  const obj = emoji(5267);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(4545).AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = tmp(1127).intl;
    const obj3 = { emojiName: emoji.name };
    announce(intl.formatToPlainString(emoji(1127).t.nKY0Fl, obj3));
  } else {
    const obj4 = {
      key: "DEFAULT_REACTION_EMOJI_UPDATED",
      icon() {
          return <closure_8 emoji={emoji} />;
        },
      content() {
          return <closure_9 emoji={emoji} />;
        },
      toastDurationMs: 3000
    };
    const obj2 = ToastActionCreatorsDefault;
    obj2.open(obj4);
  }
};
