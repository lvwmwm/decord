// Module ID: 16173
// Function ID: 16174
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10120, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16173 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10120 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
