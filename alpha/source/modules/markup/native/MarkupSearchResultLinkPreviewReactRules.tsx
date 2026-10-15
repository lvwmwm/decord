// Module ID: 17707
// Function ID: 17708
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11796, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 17707 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
};
