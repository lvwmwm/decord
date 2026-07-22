// Module ID: 11069
// Function ID: 86117
// Name: getSoundboardEmojiUrl
// Dependencies: []
// Exports: default

// Module 11069 (getSoundboardEmojiUrl)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/soundboard/native/utils/getSoundboardEmojiUrl.tsx");

export default function getSoundboardEmojiUrl(emojiId, size) {
  emojiId = emojiId.emojiId;
  let emojiURL;
  if (null != emojiId) {
    let obj = importDefault(dependencyMap[0]);
    obj = { id: emojiId, animated: false, size };
    emojiURL = obj.getEmojiURL(obj);
  }
  return emojiURL;
};
