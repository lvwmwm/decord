// Module ID: 11052
// Function ID: 11053
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [8892, 503, 2]
// Exports: default

// Module 11052 (UnreadSettingNoticeImpressionTracking)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpressionDefault from "trackImpression" /* 8892 */;

const result = set.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  trackImpressionDefault(obj, undefined, items);
  return null;
};
