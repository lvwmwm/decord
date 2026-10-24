// Module ID: 12942
// Function ID: 12943
// Name: getSoundboardEmojiUrl
// Dependencies: [1417, 2]
// Exports: default

// Module 12942 (getSoundboardEmojiUrl)
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
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
