// Module ID: 10355
// Function ID: 79924
// Name: getEmojiText
// Dependencies: [284214097]
// Exports: default

// Module 10355 (getEmojiText)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/emojis/utils/getEmojiText.tsx");

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
