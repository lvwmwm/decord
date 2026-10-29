// Module ID: 18375
// Function ID: 18376
// Name: NotificationCenterStoreActions
// Dependencies: [584, 2]
// Exports: clearNotificationGuildMentions, refreshNotifications, setTab

// Module 18375 (NotificationCenterStoreActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export function setTab(dependencyMap) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NOTIFICATION_CENTER_SET_TAB", tab: dependencyMap };
  obj.dispatch(obj2);
}
export function clearNotificationGuildMentions() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
}
export function refreshNotifications() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
}
