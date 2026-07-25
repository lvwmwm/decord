// Module ID: 13543
// Function ID: 104259
// Name: useTrackNavigatorScreenImpression
// Dependencies: [8364, 480, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 13543 (useTrackNavigatorScreenImpression)
const result = require("set").fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if ("function" === typeof impressionProperties) {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: require(480) /* isThrottled */.ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  importDefault(8364)(obj);
};
