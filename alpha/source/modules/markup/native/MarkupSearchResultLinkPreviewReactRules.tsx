// Module ID: 19051
// Function ID: 19052
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11243, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19051 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11243 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
