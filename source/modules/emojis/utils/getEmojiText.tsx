// Module ID: 12360
// Function ID: 12361
// Name: getEmojiText
// Dependencies: [2]
// Exports: default

// Module 12360 (getEmojiText)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/emojis/utils/getEmojiText.tsx");

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
