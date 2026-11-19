// Module ID: 18821
// Function ID: 18822
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11074, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18821 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
