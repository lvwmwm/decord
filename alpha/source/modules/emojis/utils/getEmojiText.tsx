// Module ID: 12777
// Function ID: 12778
// Name: getEmojiText
// Dependencies: [2]
// Exports: default

// Module 12777 (getEmojiText)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getEmojiText.tsx");

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
