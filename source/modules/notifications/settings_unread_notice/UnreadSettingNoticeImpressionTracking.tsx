// Module ID: 10421
// Function ID: 80283
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: []
// Exports: default

// Module 10421 (UnreadSettingNoticeImpressionTracking)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default function UnreadSettingNoticeImpressionTracking(id) {
  const obj = { type: require(dependencyMap[1]).ImpressionTypes.VIEW, name: require(dependencyMap[1]).ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  importDefault(dependencyMap[0])(obj, undefined, items);
  return null;
};
