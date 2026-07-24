// Module ID: 10395
// Function ID: 80190
// Name: getEmojiText
// Dependencies: [2]
// Exports: default

// Module 10395 (getEmojiText)
const result = require("set").fileFinishedImporting("modules/emojis/utils/getEmojiText.tsx");

export default function getEmojiText(id) {
  if (null == id.id) {
    if (null != id.surrogates) {
      let surrogates = id.surrogates;
    }
    return surrogates;
  }
  if (null != id.uniqueName) {
    if ("" !== id.uniqueName) {
      let name = id.uniqueName;
    }
    const _HermesInternal = HermesInternal;
    surrogates = ":" + name + ":";
  }
  name = id.name;
};
