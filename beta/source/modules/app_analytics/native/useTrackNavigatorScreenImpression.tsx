// Module ID: 15815
// Function ID: 15816
// Name: useTrackNavigatorScreenImpression
// Dependencies: [5930, 1263, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 15815 (useTrackNavigatorScreenImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1263 */;
import useTrackImpressionDefault from "useTrackImpression" /* 5930 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  const impressionName = impressionProperties.impressionName;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE, name: impressionName, properties: impressionPropertiesResult };
  const tmp2 = useTrackImpressionDefault;
  tmp2(obj);
}
