// Module ID: 17429
// Function ID: 17430
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11759, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 17429 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11759 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
