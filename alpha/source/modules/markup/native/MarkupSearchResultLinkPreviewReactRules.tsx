// Module ID: 18645
// Function ID: 18646
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11016, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18645 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
