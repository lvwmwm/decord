// Module ID: 15850
// Function ID: 15851
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [9854, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15850 (createSearchResultLinkPreviewReactRules)
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return require(9854) /* defaultReactFn */.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
