// Module ID: 15613
// Function ID: 119216
// Name: hideLiveChannelNotice
// Dependencies: []
// Exports: dismissEventBanner, hideLiveChannelNotice, hideUpcomingEventNotice, markUpcomingEventNoticeAsSeen

// Module 15613 (hideLiveChannelNotice)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx");

export const hideLiveChannelNotice = function hideLiveChannelNotice(arg0) {
  let eventId;
  let stageId;
  ({ eventId, stageId } = arg0);
  if (!tmp) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId, stageId };
    obj.dispatch(obj);
  }
};
export const hideUpcomingEventNotice = function hideUpcomingEventNotice(eventId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId };
  obj.dispatch(obj);
};
export const markUpcomingEventNoticeAsSeen = function markUpcomingEventNoticeAsSeen(guildEventId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId };
  obj.dispatch(obj);
};
export const dismissEventBanner = function dismissEventBanner(id) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "EVENT_BANNER_DISMISS", eventId: id };
  obj.dispatch(obj);
};
