// Module ID: 16225
// Function ID: 16226
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10161, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16225 (createSearchResultLinkPreviewReactRules)
import set from "set" /* 2 */;
import defaultReactFn from "defaultReactFn" /* 10161 */;

const result = set.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return defaultReactFn.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
