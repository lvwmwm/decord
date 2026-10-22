// Module ID: 18916
// Function ID: 18917
// Name: ServerHubAnalytics
// Dependencies: [1087, 1267, 18917, 2]
// Exports: trackServerHubToggleSetting, trackServerHubVisit, trackServerHubWidgetEditClicked

// Module 18916 (ServerHubAnalytics)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import editorUtils from "editorUtils" /* 18917 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_space/ServerHubAnalytics.tsx");

export const ServerHubSettingType = { ALL_SYSTEM_MESSAGES: "all_system_messages", LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages", WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages", MUSIC_SYSTEM_MESSAGES: "music_system_messages" };
export const ServerHubVisitSource = { WINNER_BADGE: "winner_badge", LEADER_BADGE: "leader_badge", LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message", MUSIC_SYSTEM_MESSAGE: "music_system_message" };
export const trackServerHubToggleSetting = function trackServerHubToggleSetting(id, settingType, value) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id: id, type: settingType, value };
  obj.track(AnalyticEvents.SERVER_HUB_TOGGLE_SETTING, obj2);
};
export const trackServerHubVisit = function trackServerHubVisit(guild_id, source) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, source };
  obj.track(AnalyticEvents.SERVER_HUB_VISIT, obj2);
};
export const trackServerHubWidgetEditClicked = function trackServerHubWidgetEditClicked(guild_id, widget_type, widget_id) {
  let obj3;
  const track = AnalyticsUtilsDefault.track;
  const SERVER_HUB_WIDGET_EDIT_CLICKED = AnalyticEvents.SERVER_HUB_WIDGET_EDIT_CLICKED;
  const obj = { guild_id, widget_type };
  AnalyticsUtilsDefault;
  const obj2 = editorUtils;
  if (obj2.isDraftWidgetId(widget_id)) {
    obj3 = {};
  } else {
    obj3 = { widget_id };
  }
  const merged = Object.assign(obj3);
  track(SERVER_HUB_WIDGET_EDIT_CLICKED, obj);
};
