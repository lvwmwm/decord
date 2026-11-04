// Module ID: 19020
// Function ID: 19021
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11235, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19020 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11235 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
