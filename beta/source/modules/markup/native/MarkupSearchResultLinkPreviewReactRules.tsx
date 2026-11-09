// Module ID: 19103
// Function ID: 19104
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11182, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19103 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11182 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
