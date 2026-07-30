// Module ID: 13606
// Function ID: 13607
// Name: useTrackNavigatorScreenImpression
// Dependencies: [8423, 503, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 13606 (useTrackNavigatorScreenImpression)
const result = require("set").fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties !== "ZodObject") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: null, name: null, properties: null };
  obj[0] = require(503) /* encodeProperties */.ImpressionTypes.PAGE;
  obj[1] = impressionProperties.impressionName;
  obj[2] = impressionPropertiesResult;
  importDefault(8423)(obj);
};
