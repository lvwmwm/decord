// Module ID: 10990
// Function ID: 10991
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [8832, 503, 2]
// Exports: default

// Module 10990 (UnreadSettingNoticeImpressionTracking)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpressionDefault from "trackImpression" /* 8832 */;

const result = set.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  trackImpressionDefault(obj, undefined, items);
  return null;
};
