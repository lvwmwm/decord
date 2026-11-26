// Module ID: 18990
// Function ID: 18991
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [10649, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18990 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10649 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
