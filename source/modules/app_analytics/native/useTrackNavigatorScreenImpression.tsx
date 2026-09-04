// Module ID: 14482
// Function ID: 14483
// Name: useTrackNavigatorScreenImpression
// Dependencies: [8698, 500, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 14482 (useTrackNavigatorScreenImpression)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 500 */;
import trackImpressionDefault from "trackImpression" /* 8698 */;

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
