// Module ID: 11401
// Function ID: 11402
// Name: getSoundboardEmojiUrl
// Dependencies: [1435, 2]
// Exports: default

// Module 11401 (getSoundboardEmojiUrl)
const result = require("set").fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    let obj = importDefault(1435);
    obj = { id: null, animated: false, size: null };
    obj[0] = emojiId;
    obj[2] = arg1;
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};
