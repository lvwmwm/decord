// Module ID: 15246
// Function ID: 115106
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: []
// Exports: createSearchResultLinkPreviewReactRules

// Module 15246 (createSearchResultLinkPreviewReactRules)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(dependencyMap[0]);
  obj = { channelIconSize: require(dependencyMap[1]).IconSizes.SMALL_14 };
  return obj.createMessagePreviewReactRules(obj);
};
