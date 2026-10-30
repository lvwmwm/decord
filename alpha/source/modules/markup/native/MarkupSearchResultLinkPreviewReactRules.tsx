// Module ID: 18696
// Function ID: 18697
// Name: MarkupSearchResultLinkPreviewReactRules
// Dependencies: [11026, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 18696 (MarkupSearchResultLinkPreviewReactRules)
import MarkupMessagePreviewReactRules from "MarkupMessagePreviewReactRules" /* 11026 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export function createSearchResultLinkPreviewReactRules() {
  const obj = MarkupMessagePreviewReactRules;
  return obj.createMessagePreviewReactRules({ customEmojiSize: 16 });
}
