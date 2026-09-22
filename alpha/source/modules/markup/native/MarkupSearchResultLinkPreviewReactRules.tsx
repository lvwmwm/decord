// Module ID: 17163
// Function ID: 17164
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [10379, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 17163 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10379 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  return MarkupMessagePreviewReactRules.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
