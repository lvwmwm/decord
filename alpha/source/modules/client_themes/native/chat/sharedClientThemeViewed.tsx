// Module ID: 12795
// Function ID: 12796
// Name: sharedClientThemeViewed
// Dependencies: [9263, 1275, 2]
// Exports: handleSharedClientThemeViewed

// Module 12795 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
import useTrackImpression from "useTrackImpression" /* 9263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj2);
};
