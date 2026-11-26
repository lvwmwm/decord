// Module ID: 18787
// Function ID: 18788
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11141, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18787 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11141 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
