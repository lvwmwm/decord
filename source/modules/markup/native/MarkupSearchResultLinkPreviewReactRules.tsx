// Module ID: 15417
// Function ID: 117641
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10288, 1273, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15417 (createSearchResultLinkPreviewReactRules)
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(10288) /* defaultReactFn */;
  obj = { iconColor: "mobile-text-heading-primary", iconSize: "xs", channelIconSize: require(1273) /* Button */.IconSizes.SMALL_14, customEmojiSize: 16 };
  return obj.createMessagePreviewReactRules(obj);
};
