// Module ID: 11305
// Function ID: 11306
// Name: getEmojiItemUrl
// Dependencies: [1412, 2]
// Exports: default

// Module 11305 (getEmojiItemUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getEmojiItemUrl.tsx");

export default function getEmojiItemUrl(id, arg1, size) {
  let emojiURL;
  if (null == id.id) {
    let str = id.url;
    if (str == null) {
      str = "";
    }
    emojiURL = str;
  } else {
    let animated = arg1;
    const obj = { id: id.id, animated, size };
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (arg1) {
      animated = id.animated;
    }
    emojiURL = getEmojiURL(obj);
  }
  return emojiURL;
};
