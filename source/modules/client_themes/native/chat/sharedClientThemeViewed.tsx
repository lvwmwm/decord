// Module ID: 11119
// Function ID: 86205
// Name: handleSharedClientThemeViewed
// Dependencies: [8402, 480, 2]
// Exports: handleSharedClientThemeViewed

// Module 11119 (handleSharedClientThemeViewed)
const result = require("set").fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed(arg0) {
  let obj = require(8402) /* trackImpression */;
  obj = { type: require(480) /* isThrottled */.ImpressionTypes.VIEW, name: require(480) /* isThrottled */.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
