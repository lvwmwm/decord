// Module ID: 18738
// Function ID: 18739
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11045, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18738 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
