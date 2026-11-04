// Module ID: 9951
// Function ID: 9952
// Name: DoubleTapEmojiUpdatedToast
// Dependencies: [5015, 1386, 1409, 5274, 5023, 1113, 5712, 2]
// Exports: getToastEmojiEntity, showDoubleTapEmojiUpdatedToast

// Module 9951 (DoubleTapEmojiUpdatedToast)
import intl3 from "intl" /* 1113 */;
import EmojiConstants from "EmojiConstants" /* 1386 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5274 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import size from "module_2" /* 2 */;

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export function getToastEmojiEntity(id) {
  let animated;
  if (null != id.id) {
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    const obj2 = { id: id.id, animated, size: EMOJI_URL_BASE_SIZE };
    animated = !useReducedMotion;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!useReducedMotion) {
      animated = id.animated;
    }
    const obj3 = { type: "emoji", src: getEmojiURL(obj2), alt: id.name };
    return obj3;
  } else {
    let obj;
    const url = id.url;
    if ("" !== url) {
      obj = { type: "emoji", src: url, alt: id.surrogates };
      const obj4 = { type: "emoji", src: url, alt: id.surrogates };
    } else {
      obj = { type: "emoji", unicode: id.surrogates };
    }
    return obj;
  }
}
export function showDoubleTapEmojiUpdatedToast(emoji) {
  let animated;
  let intl;
  let obj4;
  let obj8;
  emoji = emoji.emoji;
  const obj = useIsScreenReaderEnabled;
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = tmp(5023).AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl2 = tmp(1113).intl;
    const obj2 = { emojiName: emoji.name };
    announce(intl2.formatToPlainString(intl3.t.nKY0Fl, obj2));
  } else {
    const obj3 = { text: intl.formatToPlainString(intl3.t.nKY0Fl, obj4), icon: obj8 };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = tmp(1113).intl;
    obj4 = { emojiName: emoji.name };
    if (null != emoji.id) {
      const useReducedMotion = AccessibilityStore.useReducedMotion;
      const obj5 = { id: emoji.id, animated, size: EMOJI_URL_BASE_SIZE };
      animated = !useReducedMotion;
      const getEmojiURL = tmp3(1409).getEmojiURL;
      AvatarUtilsDefault;
      if (!useReducedMotion) {
        animated = emoji.animated;
      }
      obj8 = { type: "emoji", src: getEmojiURL(obj5), alt: emoji.name };
      const obj6 = { type: "emoji", src: getEmojiURL(obj5), alt: emoji.name };
    } else {
      const url = emoji.url;
      if ("" !== url) {
        obj8 = { type: "emoji", src: url, alt: emoji.surrogates };
        const obj7 = { type: "emoji", src: url, alt: emoji.surrogates };
      } else {
        obj8 = { type: "emoji", unicode: emoji.surrogates };
      }
    }
    open("DEFAULT_REACTION_EMOJI_UPDATED", obj3);
  }
}
