// Module ID: 11082
// Function ID: 86186
// Name: handleSharedClientThemeViewed
// Dependencies: []
// Exports: handleSharedClientThemeViewed

// Module 11082 (handleSharedClientThemeViewed)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed(arg0) {
  let obj = require(dependencyMap[0]);
  obj = { type: require(dependencyMap[1]).ImpressionTypes.VIEW, name: require(dependencyMap[1]).ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
