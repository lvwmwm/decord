// Module ID: 19314
// Function ID: 19315
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [10987, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 19314 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 10987 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
