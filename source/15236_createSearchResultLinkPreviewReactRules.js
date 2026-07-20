// Module ID: 15236
// Function ID: 115048
// Name: createSearchResultLinkPreviewReactRules
// Dependencies: []
// Exports: createSearchResultLinkPreviewReactRules

// Module 15236 (createSearchResultLinkPreviewReactRules)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/markup/native/MarkupSearchResultLinkPreviewReactRules.tsx");

export const createSearchResultLinkPreviewReactRules = function createSearchResultLinkPreviewReactRules() {
  let obj = require(dependencyMap[0]);
  obj = { channelIconSize: require(dependencyMap[1]).IconSizes.SMALL_14 };
  return obj.createMessagePreviewReactRules(obj);
};
