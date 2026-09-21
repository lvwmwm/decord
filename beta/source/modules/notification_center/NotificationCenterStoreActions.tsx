// Module ID: 16758
// Function ID: 16759
// Name: NotificationCenterStoreActions
// Dependencies: [577, 2]
// Exports: clearNotificationGuildMentions, refreshNotifications, setTab

// Module 16758 (NotificationCenterStoreActions)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(dependencyMap) {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_SET_TAB", tab: dependencyMap });
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};
