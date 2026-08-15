// Module ID: 11136
// Function ID: 11137
// Name: handleSharedClientThemeViewed
// Dependencies: [9177, 503, 2]
// Exports: handleSharedClientThemeViewed

// Module 11136 (handleSharedClientThemeViewed)
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = require(9177) /* trackImpression */;
  obj = { type: require(503) /* encodeProperties */.ImpressionTypes.VIEW, name: require(503) /* encodeProperties */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
