// Module ID: 18816
// Function ID: 18817
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [10505, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18816 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10505 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
