// Module ID: 13977
// Function ID: 13978
// Name: sharedClientThemeViewed
// Dependencies: [6192, 1260, 2]
// Exports: handleSharedClientThemeViewed

// Module 13977 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useTrackImpression from "useTrackImpression" /* 6192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj2);
}
