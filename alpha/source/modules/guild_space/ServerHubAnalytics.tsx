// Module ID: 20441
// Function ID: 20442
// Name: ServerHubAnalytics
// Dependencies: [1072, 1343, 20442, 1256, 6338, 1264, 2]
// Exports: trackServerHubEditCanceled, trackServerHubEditSaved, trackServerHubEditStarted, trackServerHubEditWidgetAdded, trackServerHubEditWidgetDeleted, trackServerHubEditWidgetMoved, trackServerHubToggleSetting, trackServerHubVisit, trackServerHubWidgetEditClicked, trackServerHubWidgetEmptyViewed, trackServerHubWidgetImpression

// Module 20441 (ServerHubAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import StandardAnalyticsConstants from "StandardAnalyticsConstants" /* 1343 */;
import useTrackImpression from "useTrackImpression" /* 6338 */;
import editorUtils from "editorUtils" /* 20442 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const ImpressionTypes = StandardAnalyticsConstants.ImpressionTypes;
const result = size.fileFinishedImporting("modules/guild_space/ServerHubAnalytics.tsx");

export const ServerHubSettingType = { ALL_SYSTEM_MESSAGES: "all_system_messages", LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages", WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages", MUSIC_SYSTEM_MESSAGES: "music_system_messages" };
export const ServerHubVisitSource = { CHANNEL_LIST: "channel_list", COACHMARK: "coachmark", WINNER_BADGE: "winner_badge", LEADER_BADGE: "leader_badge", LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message", MUSIC_SYSTEM_MESSAGE: "music_system_message", WHITEBOARD_SYSTEM_MESSAGE: "whiteboard_system_message" };
export const ServerHubEditCancelReason = { USER: "user", PERMISSION_LOST: "permission_lost" };
export function trackServerHubToggleSetting(id, ALL_SYSTEM_MESSAGES, value) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id: id, type: ALL_SYSTEM_MESSAGES, value };
  obj.track(AnalyticEvents.SERVER_HUB_TOGGLE_SETTING, obj2);
}
export function trackServerHubVisit(guild_id, source) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, source };
  obj.track(AnalyticEvents.SERVER_HUB_VISIT, obj2);
}
export function trackServerHubWidgetImpression(guild_id) {
  let column;
  let obj2;
  let obj4;
  let order;
  const tmp = useTrackImpression;
  const trackImpression = tmp.trackImpression;
  const widget = guild_id.widget;
  const obj = { type: ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.SERVER_HUB_WIDGET, properties: obj2 };
  obj2 = { guild_id: guild_id.guildId, hub_load_id: guild_id.loadId, widget_type: widget.type, column_index: column, order_index: order };
  ({ column, order } = guild_id);
  const obj3 = editorUtils;
  if (obj3.isDraftWidgetId(widget.id)) {
    obj4 = {};
  } else {
    obj4 = { widget_id: widget.id };
  }
  const merged = Object.assign(obj4);
  trackImpression(obj, false, true);
}
export function trackServerHubWidgetEmptyViewed(guild_id) {
  let column;
  let obj3;
  let order;
  const widget = guild_id.widget;
  const obj = { guild_id: guild_id.guildId, hub_load_id: guild_id.loadId, widget_type: widget.type, column_index: column, order_index: order };
  const track = AnalyticsUtilsDefault.track;
  const SERVER_HUB_WIDGET_EMPTY_VIEWED = AnalyticEvents.SERVER_HUB_WIDGET_EMPTY_VIEWED;
  ({ column, order } = guild_id);
  AnalyticsUtilsDefault;
  const obj2 = editorUtils;
  if (obj2.isDraftWidgetId(widget.id)) {
    obj3 = {};
  } else {
    obj3 = { widget_id: widget.id };
  }
  const merged = Object.assign(obj3);
  track(SERVER_HUB_WIDGET_EMPTY_VIEWED, obj);
}
export function trackServerHubWidgetEditClicked(guild_id, widget_type, widget_id) {
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
}
export function trackServerHubEditStarted(guild_id, edit_session_id, arg2) {
  let isNewHub;
  let widgetCount;
  ({ widgetCount, isNewHub } = arg2);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, edit_session_id, widget_count: widgetCount, is_new_hub: isNewHub };
  obj.track(AnalyticEvents.SERVER_HUB_EDIT_STARTED, obj2);
}
export function trackServerHubEditWidgetAdded(guild_id, edit_session_id, widget) {
  widget = widget.widget;
  const widgetCount = widget.widgetCount;
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, edit_session_id, widget_type: widget.type, column_index: widget.position.column, order_index: widget.position.order, widget_count: widgetCount };
  obj.track(AnalyticEvents.SERVER_HUB_EDIT_WIDGET_ADDED, obj2);
}
export function trackServerHubEditWidgetMoved(guild_id, edit_session_id, arg2) {
  let from;
  let obj3;
  let to;
  let widget;
  ({ widget, from, to } = arg2);
  const obj = { guild_id, edit_session_id, widget_type: widget.type };
  const id = widget.id;
  const track = AnalyticsUtilsDefault.track;
  const SERVER_HUB_EDIT_WIDGET_MOVED = AnalyticEvents.SERVER_HUB_EDIT_WIDGET_MOVED;
  AnalyticsUtilsDefault;
  const obj2 = editorUtils;
  if (obj2.isDraftWidgetId(id)) {
    obj3 = { is_new_widget: true };
  } else {
    obj3 = { is_new_widget: false, widget_id: id };
  }
  const merged = Object.assign(obj3);
  ({ column: obj.from_column_index, order: obj.from_order_index } = from);
  ({ column: obj.to_column_index, order: obj.to_order_index } = to);
  track(SERVER_HUB_EDIT_WIDGET_MOVED, obj);
}
export function trackServerHubEditWidgetDeleted(guild_id, edit_session_id, widget) {
  let obj3;
  widget = widget.widget;
  const widgetCount = widget.widgetCount;
  const id = widget.id;
  const obj = { guild_id, edit_session_id, widget_type: widget.type, column_index: widget.position.column, order_index: widget.position.order, widget_count: widgetCount };
  const track = AnalyticsUtilsDefault.track;
  const SERVER_HUB_EDIT_WIDGET_DELETED = AnalyticEvents.SERVER_HUB_EDIT_WIDGET_DELETED;
  AnalyticsUtilsDefault;
  const obj2 = editorUtils;
  if (obj2.isDraftWidgetId(id)) {
    obj3 = { is_new_widget: true };
  } else {
    obj3 = { is_new_widget: false, widget_id: id };
  }
  const merged = Object.assign(obj3);
  track(SERVER_HUB_EDIT_WIDGET_DELETED, obj);
}
export function trackServerHubEditSaved(guild_id, edit_session_id, arg2) {
  let addedWidgetCount;
  let bannerChanged;
  let deletedWidgetCount;
  let widgetCount;
  ({ widgetCount, addedWidgetCount, deletedWidgetCount, bannerChanged } = arg2);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, edit_session_id, widget_count: widgetCount, added_widget_count: addedWidgetCount, deleted_widget_count: deletedWidgetCount, banner_changed: bannerChanged };
  obj.track(AnalyticEvents.SERVER_HUB_EDIT_SAVED, obj2);
}
export function trackServerHubEditCanceled(guild_id, edit_session_id, arg2) {
  let hadChanges;
  let reason;
  let widgetCount;
  ({ reason, hadChanges, widgetCount } = arg2);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id, edit_session_id, reason, had_changes: hadChanges, widget_count: widgetCount };
  obj.track(AnalyticEvents.SERVER_HUB_EDIT_CANCELED, obj2);
}
