// Module ID: 15480
// Function ID: 117977
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10262, 1273, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15480 (createSearchResultLinkPreviewReactRules)
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(10262) /* defaultReactFn */;
  obj = { iconColor: "mobile-text-heading-primary", iconSize: "xs", channelIconSize: require(1273) /* Button */.IconSizes.SMALL_14, customEmojiSize: 16 };
  return obj.createMessagePreviewReactRules(obj);
};
