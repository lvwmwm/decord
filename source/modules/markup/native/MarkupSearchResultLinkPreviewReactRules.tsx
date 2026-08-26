// Module ID: 16110
// Function ID: 16111
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10016, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16110 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10016 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
