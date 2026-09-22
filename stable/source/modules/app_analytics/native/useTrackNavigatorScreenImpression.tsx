// Module ID: 14646
// Function ID: 14647
// Name: useTrackNavigatorScreenImpression
// Dependencies: [8894, 1248, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 14646 (useTrackNavigatorScreenImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1248 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8894 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE, name: impressionProperties.impressionName, properties: impressionPropertiesResult };
  useTrackImpressionDefault(obj);
};
