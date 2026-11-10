// Module ID: 19132
// Function ID: 19133
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11191, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19132 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11191 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
