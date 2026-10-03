// Module ID: 16831
// Function ID: 16832
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11696, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 16831 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11696 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
