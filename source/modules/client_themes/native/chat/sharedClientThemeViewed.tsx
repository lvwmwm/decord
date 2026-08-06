// Module ID: 11274
// Function ID: 11275
// Name: handleSharedClientThemeViewed
// Dependencies: [9267, 503, 2]
// Exports: handleSharedClientThemeViewed

// Module 11274 (handleSharedClientThemeViewed)
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = require(9267) /* trackImpression */;
  obj = { type: require(503) /* encodeProperties */.ImpressionTypes.VIEW, name: require(503) /* encodeProperties */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
