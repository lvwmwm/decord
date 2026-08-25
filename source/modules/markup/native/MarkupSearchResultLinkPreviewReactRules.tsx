// Module ID: 16029
// Function ID: 16030
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [9949, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16029 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 9949 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
