// Module ID: 15788
// Function ID: 121793
// Name: hideLiveChannelNotice
// Dependencies: [686, 2]
// Exports: dismissEventBanner, hideLiveChannelNotice, hideUpcomingEventNotice, markUpcomingEventNoticeAsSeen

// Module 15788 (hideLiveChannelNotice)
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx");

export const hideLiveChannelNotice = function hideLiveChannelNotice(arg0) {
  let eventId;
  let stageId;
  ({ eventId, stageId } = arg0);
  if (!tmp) {
    let obj = importDefault(686);
    obj = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId, stageId };
    obj.dispatch(obj);
  }
};
export const hideUpcomingEventNotice = function hideUpcomingEventNotice(eventId) {
  let obj = importDefault(686);
  obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId };
  obj.dispatch(obj);
};
export const markUpcomingEventNoticeAsSeen = function markUpcomingEventNoticeAsSeen(guildEventId) {
  let obj = importDefault(686);
  obj = { type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId };
  obj.dispatch(obj);
};
export const dismissEventBanner = function dismissEventBanner(id) {
  let obj = importDefault(686);
  obj = { type: "EVENT_BANNER_DISMISS", eventId: id };
  obj.dispatch(obj);
};
