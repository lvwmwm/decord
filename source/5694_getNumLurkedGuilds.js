// Module ID: 5694
// Function ID: 48994
// Name: getNumLurkedGuilds
// Dependencies: []
// Exports: trackGuildIconClicked, trackJoinClicked, trackLeavePromptLeaveClicked, trackLongPressLeaveClicked, trackLurkStarted

// Module 5694 (getNumLurkedGuilds)
function getNumLurkedGuilds() {
  return closure_2.lurkingGuildIds().length;
}
let closure_2 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/lurker_mode/LurkerPreviewAnalytics.tsx");

export const trackLurkStarted = function trackLurkStarted(guild_id, joinSource, sourceLocationStack) {
  let obj = importDefault(dependencyMap[2]);
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
  let obj = importDefault(dependencyMap[2]);
  obj = { guild_id: guildId, num_lurked_guilds: getNumLurkedGuilds(), join_source: LEAVE_PROMPT_LURKER, has_navigated_away };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_JOIN_CLICKED, obj);
};
export const trackLeavePromptLeaveClicked = function trackLeavePromptLeaveClicked(id) {
  let obj = importDefault(dependencyMap[2]);
  obj = { guild_id: id, num_lurked_guilds: getNumLurkedGuilds() };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LEAVE_PROMPT_LEAVE_CLICKED, obj);
};
export const trackGuildIconClicked = function trackGuildIconClicked(closure_0) {
  let obj = importDefault(dependencyMap[2]);
  obj = { guild_id: closure_0, num_lurked_guilds: getNumLurkedGuilds() };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_GUILD_ICON_CLICKED, obj);
};
export const trackLongPressLeaveClicked = function trackLongPressLeaveClicked(guild_id) {
  let obj = importDefault(dependencyMap[2]);
  obj = { guild_id, num_lurked_guilds: getNumLurkedGuilds() };
  obj.track(AnalyticEvents.MOBILE_LURKER_PREVIEW_LONG_PRESS_LEAVE_CLICKED, obj);
};
