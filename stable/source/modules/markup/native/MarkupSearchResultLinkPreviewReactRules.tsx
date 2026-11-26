// Module ID: 19511
// Function ID: 19512
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11056, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19511 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
