// Module ID: 15508
// Function ID: 15509
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: [10279, 1297, 2]
// Exports: createSearchResultLinkPreviewReactRules

// Module 15508 (createSearchResultLinkPreviewReactRules)
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(10279) /* defaultReactFn */;
  obj = { iconColor: "mobile-text-heading-primary", iconSize: "xs", channelIconSize: require(1297) /* Button */.IconSizes.SMALL_14, customEmojiSize: 16 };
  return obj.createMessagePreviewReactRules(obj);
};
