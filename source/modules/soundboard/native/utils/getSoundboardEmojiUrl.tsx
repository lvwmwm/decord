// Module ID: 11106
// Function ID: 86356
// Name: getSoundboardEmojiUrl
// Dependencies: [1392, 2]
// Exports: default

// Module 11106 (getSoundboardEmojiUrl)
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
