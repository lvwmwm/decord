// Module ID: 13588
// Function ID: 104437
// Name: useTrackNavigatorScreenImpression
// Dependencies: [8402, 480, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 13588 (useTrackNavigatorScreenImpression)
const result = require("set").fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if ("function" === typeof impressionProperties) {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: require(480) /* isThrottled */.ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  importDefault(8402)(obj);
};
