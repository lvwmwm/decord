// Module ID: 10461
// Function ID: 80549
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [8604, 480, 2]
// Exports: default

// Module 10461 (UnreadSettingNoticeImpressionTracking)
const result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: require(480) /* isThrottled */.ImpressionTypes.VIEW, name: require(480) /* isThrottled */.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  importDefault(8604)(obj, undefined, items);
  return null;
};
