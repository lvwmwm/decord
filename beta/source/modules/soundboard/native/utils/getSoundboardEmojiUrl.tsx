// Module ID: 14246
// Function ID: 14247
// Name: getSoundboardEmojiUrl
// Dependencies: [1414, 2]
// Exports: default

// Module 14246 (getSoundboardEmojiUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId, size) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    const obj2 = { id: emojiId, animated: false, size };
    const obj = AvatarUtilsDefault;
    emojiURL = obj.getEmojiURL(obj2);
  }
  return emojiURL;
};
