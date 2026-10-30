// Module ID: 11317
// Function ID: 11318
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [6023, 1261, 2]
// Exports: default

// Module 11317 (UnreadSettingNoticeImpressionTracking)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6023 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  const tmp = useTrackImpressionDefault;
  tmp(obj, undefined, items);
  return null;
};
