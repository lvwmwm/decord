// Module ID: 14178
// Function ID: 14179
// Name: useTrackNavigatorScreenImpression
// Dependencies: [8855, 503, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 14178 (useTrackNavigatorScreenImpression)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpressionDefault from "trackImpression" /* 8855 */;

const result = set.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: encodeProperties.ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  trackImpressionDefault(obj);
};
