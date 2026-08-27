// Module ID: 11426
// Function ID: 11427
// Name: getSoundboardEmojiUrl
// Dependencies: [1435, 2]
// Exports: default

// Module 11426 (getSoundboardEmojiUrl)
import set from "set" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    let obj = getAvatarURLDefault;
    obj = { id: null, animated: false, size: null };
    obj[0] = emojiId;
    obj[2] = arg1;
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};
