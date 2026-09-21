// Module ID: 17151
// Function ID: 17152
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [10373, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 17151 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return MarkupMessagePreviewReactRules.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
