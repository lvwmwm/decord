// Module ID: 11260
// Function ID: 11261
// Name: getSoundboardEmojiUrl
// Dependencies: [1416, 2]
// Exports: default

// Module 11260 (getSoundboardEmojiUrl)
const result = require("set").fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    let obj = importDefault(1416);
    obj = { id: null, animated: false, size: null };
    obj[0] = emojiId;
    obj[2] = arg1;
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};
