// Module ID: 13379
// Function ID: 13380
// Name: getSoundboardEmojiUrl
// Dependencies: [1410, 2]
// Exports: default

// Module 13379 (getSoundboardEmojiUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
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
