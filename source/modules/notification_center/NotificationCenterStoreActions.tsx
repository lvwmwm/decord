// Module ID: 15613
// Function ID: 15614
// Name: setTab
// Dependencies: [709, 2]
// Exports: clearNotificationGuildMentions, refreshNotifications, setTab

// Module 15613 (setTab)
const result = require("set").fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(BROWSE) {
  let obj = importDefault(709);
  obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: BROWSE };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  importDefault(709).dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  importDefault(709).dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};
