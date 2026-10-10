// Module ID: 12141
// Function ID: 12142
// Name: getEmojiText
// Dependencies: [2]
// Exports: default

// Module 12141 (getEmojiText)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getEmojiText.tsx");

export default function getEmojiText(id) {
  let surrogates;
  if (null == id.id) {
    if (null != id.surrogates) {
      surrogates = id.surrogates;
    }
    return surrogates;
  }
  if (null != id.uniqueName) {
    let name;
    if ("" !== id.uniqueName) {
      name = id.uniqueName;
    }
    const _HermesInternal = HermesInternal;
    surrogates = ":" + name + ":";
  }
  name = id.name;
};
