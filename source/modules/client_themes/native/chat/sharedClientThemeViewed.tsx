// Module ID: 11093
// Function ID: 86249
// Name: handleSharedClientThemeViewed
// Dependencies: [8559, 480, 2]
// Exports: handleSharedClientThemeViewed

// Module 11093 (handleSharedClientThemeViewed)
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed(arg0) {
  let obj = require(8559) /* trackImpression */;
  obj = { type: require(480) /* isThrottled */.ImpressionTypes.VIEW, name: require(480) /* isThrottled */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
