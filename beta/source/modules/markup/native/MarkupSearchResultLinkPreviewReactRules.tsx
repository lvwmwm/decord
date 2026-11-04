// Module ID: 18745
// Function ID: 18746
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11045, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18745 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
