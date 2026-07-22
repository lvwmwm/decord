// Module ID: 15254
// Function ID: 115149
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: []
// Exports: createSearchResultLinkPreviewReactRules

// Module 15254 (createSearchResultLinkPreviewReactRules)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(dependencyMap[0]);
  obj = { channelIconSize: require(dependencyMap[1]).IconSizes.SMALL_14 };
  return obj.createMessagePreviewReactRules(obj);
};
