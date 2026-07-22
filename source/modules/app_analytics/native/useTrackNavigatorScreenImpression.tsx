// Module ID: 13365
// Function ID: 101649
// Name: useTrackNavigatorScreenImpression
// Dependencies: []
// Exports: useTrackNavigatorScreenImpression

// Module 13365 (useTrackNavigatorScreenImpression)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if ("function" === typeof impressionProperties) {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: require(dependencyMap[1]).ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  importDefault(dependencyMap[0])(obj);
};
