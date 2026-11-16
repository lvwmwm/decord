// Module ID: 19508
// Function ID: 19509
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11056, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19508 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
