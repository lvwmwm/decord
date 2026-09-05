// Module ID: 16676
// Function ID: 16677
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10117, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16676 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10117 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
