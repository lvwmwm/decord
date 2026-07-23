// Module ID: 15143
// Function ID: 115369
// Name: setTab
// Dependencies: [686, 2]
// Exports: clearNotificationGuildMentions, refreshNotifications, setTab

// Module 15143 (setTab)
const result = require("set").fileFinishedImporting("modules/notification_center/NotificationCenterStoreActions.tsx");

export const setTab = function setTab(BROWSE) {
  let obj = importDefault(686);
  obj = { type: "NOTIFICATION_CENTER_SET_TAB", tab: BROWSE };
  obj.dispatch(obj);
};
export const clearNotificationGuildMentions = function clearNotificationGuildMentions() {
  importDefault(686).dispatch({ type: "NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS" });
};
export const refreshNotifications = function refreshNotifications() {
  importDefault(686).dispatch({ type: "NOTIFICATION_CENTER_REFRESH" });
};
