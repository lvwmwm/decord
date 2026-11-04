// Module ID: 19006
// Function ID: 19007
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11235, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19006 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11235 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
