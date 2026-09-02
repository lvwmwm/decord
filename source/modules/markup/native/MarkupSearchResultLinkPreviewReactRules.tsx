// Module ID: 16492
// Function ID: 16493
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10222, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16492 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10222 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
