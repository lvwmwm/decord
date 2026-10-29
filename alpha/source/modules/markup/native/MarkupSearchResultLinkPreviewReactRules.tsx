// Module ID: 18637
// Function ID: 18638
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [12045, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18637 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 12045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
