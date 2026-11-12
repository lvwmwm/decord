// Module ID: 19141
// Function ID: 19142
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11214, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19141 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11214 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
