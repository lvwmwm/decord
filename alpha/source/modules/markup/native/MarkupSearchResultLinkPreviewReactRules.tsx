// Module ID: 17150
// Function ID: 17151
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11775, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 17150 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11775 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
