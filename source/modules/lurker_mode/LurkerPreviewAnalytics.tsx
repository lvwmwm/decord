// Module ID: 5700
// Function ID: 49090
// Name: getNumLurkedGuilds
// Dependencies: [3759, 653, 675, 2]
// Exports: trackGuildIconClicked, trackJoinClicked, trackLeavePromptLeaveClicked, trackLongPressLeaveClicked, trackLurkStarted

// Module 5700 (getNumLurkedGuilds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

function getNumLurkedGuilds() {
  return _isNativeReflectConstruct.lurkingGuildIds().length;
}
const result = require("expandLocation").fileFinishedImporting("modules/lurker_mode/LurkerPreviewAnalytics.tsx");

export const trackLurkStarted = function trackLurkStarted(guild_id, joinSource, sourceLocationStack) {
  let obj = importDefault(675);
  obj = { guild_id, num_lurked_guilds: getNumLurkedGuilds() };
  let tmp = null;
  if (null != joinSource) {
    tmp = joinSource;
  }
  obj.join_source = tmp;
  let tmp2 = null;
  if (null != sourceLocationStack) {
    tmp2 = sourceLocationStack;
  }
  obj.location = tmp2;
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LURK_STARTED, obj);
};
export const trackJoinClicked = function trackJoinClicked(guildId, LEAVE_PROMPT_LURKER, has_navigated_away) {
  let obj = importDefault(675);
  obj = { guild_id: guildId, num_lurked_guilds: getNumLurkedGuilds(), join_source: LEAVE_PROMPT_LURKER, has_navigated_away };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_JOIN_CLICKED, obj);
};
export const trackLeavePromptLeaveClicked = function trackLeavePromptLeaveClicked(id) {
  let obj = importDefault(675);
  obj = { guild_id: id, num_lurked_guilds: getNumLurkedGuilds() };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LEAVE_PROMPT_LEAVE_CLICKED, obj);
};
export const trackGuildIconClicked = function trackGuildIconClicked(outer1_0) {
  let obj = importDefault(675);
  obj = { guild_id: outer1_0, num_lurked_guilds: getNumLurkedGuilds() };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_GUILD_ICON_CLICKED, obj);
};
export const trackLongPressLeaveClicked = function trackLongPressLeaveClicked(closure_0) {
  let obj = importDefault(675);
  obj = { guild_id: closure_0, num_lurked_guilds: getNumLurkedGuilds() };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LONG_PRESS_LEAVE_CLICKED, obj);
};
