// Module ID: 15997
// Function ID: 15998
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10093, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15997 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10093 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
