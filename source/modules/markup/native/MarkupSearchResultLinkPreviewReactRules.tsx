// Module ID: 15900
// Function ID: 15901
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10054, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15900 (createSearchResultLinkPreviewReactRules)
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return require(10054) /* defaultReactFn */.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
