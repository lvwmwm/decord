// Module ID: 18829
// Function ID: 18830
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11096, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18829 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11096 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
