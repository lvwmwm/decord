// Module ID: 11415
// Function ID: 11416
// Name: handleSharedClientThemeViewed
// Dependencies: [9395, 503, 2]
// Exports: handleSharedClientThemeViewed

// Module 11415 (handleSharedClientThemeViewed)
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = require(9395) /* trackImpression */;
  obj = { type: require(503) /* encodeProperties */.ImpressionTypes.VIEW, name: require(503) /* encodeProperties */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
