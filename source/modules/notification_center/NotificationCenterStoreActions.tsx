// Module ID: 15028
// Function ID: 113200
// Name: setTab
// Dependencies: []
// Exports: clearNotificationGuildMentions, refreshNotifications, setTab

// Module 15028 (setTab)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(BROWSE) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: BROWSE };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  importDefault(dependencyMap[0]).dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  importDefault(dependencyMap[0]).dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};
