// Module ID: 16513
// Function ID: 16514
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10226, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16513 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10226 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
