// Module ID: 19040
// Function ID: 19041
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11198, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19040 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11198 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
