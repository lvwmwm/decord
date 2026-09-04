// Module ID: 16599
// Function ID: 16600
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10046, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16599 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10046 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
