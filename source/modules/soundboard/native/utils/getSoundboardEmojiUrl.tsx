// Module ID: 11104
// Function ID: 86117
// Name: getSoundboardEmojiUrl
// Dependencies: [1392, 2]
// Exports: default

// Module 11104 (getSoundboardEmojiUrl)
const result = require("set").fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId, size) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    let obj = importDefault(1392);
    obj = { id: emojiId, animated: false, size };
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};
