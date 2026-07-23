// Module ID: 10432
// Function ID: 80357
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [8559, 480, 2]
// Exports: default

// Module 10432 (UnreadSettingNoticeImpressionTracking)
const result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: require(480) /* isThrottled */.ImpressionTypes.VIEW, name: require(480) /* isThrottled */.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  importDefault(8559)(obj, undefined, items);
  return null;
};
