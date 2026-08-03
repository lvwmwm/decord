// Module ID: 11269
// Function ID: 11270
// Name: handleSharedClientThemeViewed
// Dependencies: [8741, 503, 2]
// Exports: handleSharedClientThemeViewed

// Module 11269 (handleSharedClientThemeViewed)
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = require(8741) /* trackImpression */;
  obj = { type: require(503) /* encodeProperties */.ImpressionTypes.VIEW, name: require(503) /* encodeProperties */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
