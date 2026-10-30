// Module ID: 16363
// Function ID: 16364
// Name: useTrackNavigatorScreenImpression
// Dependencies: [6023, 1261, 2]
// Exports: useTrackNavigatorScreenImpression

// Module 16363 (useTrackNavigatorScreenImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6023 */;
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
