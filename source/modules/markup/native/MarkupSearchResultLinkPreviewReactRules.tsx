// Module ID: 15776
// Function ID: 15777
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [9799, 1297, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15776 (createSearchResultLinkPreviewReactRules)
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(9799) /* defaultReactFn */;
  obj = { iconColor: "mobile-text-heading-primary", iconSize: "xs", channelIconSize: require(1297) /* Button */.IconSizes.SMALL_14, customEmojiSize: 16 };
  return obj.createMessagePreviewReactRules(obj);
};
