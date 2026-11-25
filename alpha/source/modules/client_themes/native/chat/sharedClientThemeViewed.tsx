// Module ID: 12891
// Function ID: 12892
// Name: sharedClientThemeViewed
// Dependencies: [6085, 1263, 2]
// Exports: handleSharedClientThemeViewed

// Module 12891 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1263 */;
import useTrackImpression from "useTrackImpression" /* 6085 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj2);
}
