// Module ID: 19319
// Function ID: 19320
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [10993, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19319 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
