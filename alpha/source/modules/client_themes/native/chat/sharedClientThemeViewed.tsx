// Module ID: 13663
// Function ID: 13664
// Name: sharedClientThemeViewed
// Dependencies: [6023, 1261, 2]
// Exports: handleSharedClientThemeViewed

// Module 13663 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import useTrackImpression from "useTrackImpression" /* 6023 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj2);
}
