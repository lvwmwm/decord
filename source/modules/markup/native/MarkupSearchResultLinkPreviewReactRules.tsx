// Module ID: 15514
// Function ID: 15515
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10283, 1297, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15514 (createSearchResultLinkPreviewReactRules)
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(10283) /* defaultReactFn */;
  obj = { iconColor: "mobile-text-heading-primary", iconSize: "xs", channelIconSize: require(1297) /* Button */.IconSizes.SMALL_14, customEmojiSize: 16 };
  return obj.createMessagePreviewReactRules(obj);
};
