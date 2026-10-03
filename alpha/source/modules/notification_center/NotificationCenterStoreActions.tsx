// Module ID: 16354
// Function ID: 16355
// Name: NotificationCenterStoreActions
// Dependencies: [584, 2]
// Exports: clearNotificationGuildMentions, refreshNotifications, setTab

// Module 16354 (NotificationCenterStoreActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(dependencyMap) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NOTIFICATION_CENTER_SET_TAB", tab: dependencyMap };
  obj.dispatch(obj2);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};
