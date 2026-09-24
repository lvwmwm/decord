// Module ID: 12100
// Function ID: 12101
// Name: getSoundboardEmojiUrl
// Dependencies: [1401, 2]
// Exports: default

// Module 12100 (getSoundboardEmojiUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId, size) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    const obj2 = { id: emojiId, animated: false, size };
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
  }
  return emojiURL;
};
