// Module ID: 11393
// Function ID: 11394
// Name: getSoundboardEmojiUrl
// Dependencies: [1435, 2]
// Exports: default

// Module 11393 (getSoundboardEmojiUrl)
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
