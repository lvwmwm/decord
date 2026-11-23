// Module ID: 18774
// Function ID: 18775
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11136, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18774 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11136 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
