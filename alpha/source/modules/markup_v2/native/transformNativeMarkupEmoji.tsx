// Module ID: 8590
// Function ID: 8591
// Name: transformNativeMarkupEmoji
// Dependencies: [4955, 6027, 1410, 2]
// Exports: transformNativeEmoji

// Module 8590 (transformNativeMarkupEmoji)
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4955 */;
import MarkupTypes from "MarkupTypes" /* 6027 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupEmoji.tsx");

export function transformNativeEmoji(value, disableAnimatedEmoji) {
  let animated;
  let combined;
  let id;
  let name;
  if ("unicode" === value.type) {
    value = value.value;
    const obj = UnicodeEmojisDefault;
    const result = obj.convertSurrogateToName(value, false);
    const obj2 = { type: MarkupTypes.AST_KEY.EMOJI, content: combined, surrogate: value };
    combined = value;
    if ("" !== result) {
      const _HermesInternal = HermesInternal;
      combined = ":" + result + ":";
    }
    return obj2;
  } else {
    ({ id, animated, name } = value.value);
    const str1 = id.toString();
    const obj4 = { id: str1, animated, size: 48 };
    const obj3 = AvatarUtilsDefault;
    let emojiURL = obj3.getEmojiURL(obj4);
    const obj6 = { id: str1, animated: false, size: 48 };
    const obj5 = AvatarUtilsDefault;
    const emojiURL1 = obj5.getEmojiURL(obj6);
    disableAnimatedEmoji = disableAnimatedEmoji.disableAnimatedEmoji;
    const obj7 = { type: MarkupTypes.AST_KEY.CUSTOM_EMOJI, id: str1, alt: name, src: emojiURL, frozenSrc: emojiURL1 };
    if (true === disableAnimatedEmoji) {
      emojiURL = emojiURL1;
    }
    return obj7;
  }
}
