// Module ID: 11555
// Function ID: 11556
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [8894, 1248, 2]
// Exports: default

// Module 11555 (UnreadSettingNoticeImpressionTracking)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1248 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8894 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  useTrackImpressionDefault(obj, undefined, items);
  return null;
};
