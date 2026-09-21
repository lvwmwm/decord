// Module ID: 8373
// Function ID: 8374
// Name: transformNativeMarkupEmoji
// Dependencies: [5209, 1401, 2]
// Exports: transformNativeEmoji

// Module 8373 (transformNativeMarkupEmoji)
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import MarkupTypes from "MarkupTypes" /* 5209 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupEmoji.tsx");

export const transformNativeEmoji = function transformNativeEmoji(value, disableAnimatedEmoji) {
  if ("unicode" === value.type) {
    value = value.value;
    const obj = { type: MarkupTypes.AST_KEY.EMOJI, content: value, surrogate: value };
    return obj;
  } else {
    ({ id, animated, name } = value.value);
    const str = id.toString();
    const obj3 = { id: str, animated, size: 48 };
    let emojiURL = AvatarUtilsDefault.getEmojiURL(obj3);
    const obj5 = { id: str, animated: false, size: 48 };
    const emojiURL1 = AvatarUtilsDefault.getEmojiURL(obj5);
    const obj6 = { type: MarkupTypes.AST_KEY.CUSTOM_EMOJI, id: str, alt: name, src: null, frozenSrc: null };
    if (true === disableAnimatedEmoji.disableAnimatedEmoji) {
      emojiURL = emojiURL1;
    }
    obj6.src = emojiURL;
    obj6.frozenSrc = emojiURL1;
    return obj6;
  }
};
