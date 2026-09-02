// Module ID: 11272
// Function ID: 11273
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [8907, 500, 2]
// Exports: default

// Module 11272 (UnreadSettingNoticeImpressionTracking)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 500 */;
import trackImpressionDefault from "trackImpression" /* 8907 */;

const result = set.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  trackImpressionDefault(obj, undefined, items);
  return null;
};
