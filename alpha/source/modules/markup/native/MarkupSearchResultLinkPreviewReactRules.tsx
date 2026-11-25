// Module ID: 18928
// Function ID: 18929
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [10604, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18928 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10604 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
