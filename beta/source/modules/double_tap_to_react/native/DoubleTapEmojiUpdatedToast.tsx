// Module ID: 10586
// Function ID: 10587
// Name: DoubleTapEmojiUpdatedToast
// Dependencies: [19, 4825, 1375, 21, 4836, 576, 1364, 504, 1397, 6551, 4832, 1115, 5266, 4541, 4528, 2]
// Exports: showDoubleTapEmojiUpdatedToast

// Module 10586 (DoubleTapEmojiUpdatedToast)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let num2;
let obj2;
let obj3;
let obj4;
class ToastEmoji {
  constructor(emoji) {
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
    const tmp5 = stateFromStores(6551);
    if (null == emoji.id) {
      str = emoji.surrogates;
    }
    return tmp4(tmp5, obj2);
  }
}
function ToastText(emoji) {
  emoji = emoji.emoji;
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const obj2 = { emojiName: emoji.name };
  return <Text variant="text-sm/normal" style={closure_7().toastText}>{intl.format(intl2.t.nKY0Fl, obj2)}</Text>;
}
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
const metroImportDefault = createStyles(obj);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  const obj = emoji(5266);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(4541).AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = tmp(1115).intl;
    const obj3 = { emojiName: emoji.name };
    announce(intl.formatToPlainString(emoji(1115).t.nKY0Fl, obj3));
  } else {
    const obj4 = {
      key: "DEFAULT_REACTION_EMOJI_UPDATED",
      icon() {
          return <ToastEmoji emoji={emoji} />;
        },
      content() {
          return <ToastText emoji={emoji} />;
        },
      toastDurationMs: 3000
    };
    const obj2 = ToastActionCreatorsDefault;
    obj2.open(obj4);
  }
};
