// Module ID: 18040
// Function ID: 18041
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [12013, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18040 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 12013 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
