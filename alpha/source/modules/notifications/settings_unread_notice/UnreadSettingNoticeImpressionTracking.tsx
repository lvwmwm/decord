// Module ID: 11542
// Function ID: 11543
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [6163, 1260, 2]
// Exports: default

// Module 11542 (UnreadSettingNoticeImpressionTracking)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6163 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  const tmp = useTrackImpressionDefault;
  tmp(obj, undefined, items);
  return null;
};
