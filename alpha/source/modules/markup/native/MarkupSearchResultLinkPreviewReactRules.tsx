// Module ID: 19553
// Function ID: 19554
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11814, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19553 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11814 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
