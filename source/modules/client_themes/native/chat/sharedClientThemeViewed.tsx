// Module ID: 11120
// Function ID: 86438
// Name: handleSharedClientThemeViewed
// Dependencies: [8604, 480, 2]
// Exports: handleSharedClientThemeViewed

// Module 11120 (handleSharedClientThemeViewed)
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed(arg0) {
  let obj = require(8604) /* trackImpression */;
  obj = { type: require(480) /* isThrottled */.ImpressionTypes.VIEW, name: require(480) /* isThrottled */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
