// Module ID: 16260
// Function ID: 16261
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10200, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16260 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10200 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
