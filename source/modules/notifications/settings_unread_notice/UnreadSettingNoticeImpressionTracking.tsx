// Module ID: 10314
// Function ID: 10315
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [9267, 503, 2]
// Exports: default

// Module 10314 (UnreadSettingNoticeImpressionTracking)
const result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: null, name: null };
  obj[0] = require(503) /* encodeProperties */.ImpressionTypes.VIEW;
  obj[1] = require(503) /* encodeProperties */.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE;
  const items = [id.id];
  importDefault(9267)(obj, undefined, items);
  return null;
};
