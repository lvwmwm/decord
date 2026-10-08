// Module ID: 11636
// Function ID: 11637
// Name: sharedClientThemeViewed
// Dependencies: [8941, 1272, 2]
// Exports: handleSharedClientThemeViewed

// Module 11636 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import useTrackImpression from "useTrackImpression" /* 8941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj2);
};
