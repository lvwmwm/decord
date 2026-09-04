// Module ID: 11867
// Function ID: 11868
// Name: getSoundboardEmojiUrl
// Dependencies: [1431, 2]
// Exports: default

// Module 11867 (getSoundboardEmojiUrl)
import set from "set" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;

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
