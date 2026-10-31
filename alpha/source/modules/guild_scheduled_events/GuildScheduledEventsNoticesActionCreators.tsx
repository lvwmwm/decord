// Module ID: 19161
// Function ID: 19162
// Name: GuildScheduledEventsNoticesActionCreators
// Dependencies: [572, 2]
// Exports: dismissEventBanner, hideLiveChannelNotice, hideUpcomingEventNotice, markUpcomingEventNoticeAsSeen

// Module 19161 (GuildScheduledEventsNoticesActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx");

export function hideLiveChannelNotice(arg0) {
  let eventId;
  let stageId;
  ({ eventId, stageId } = arg0);
  const tmp = null == eventId && null == stageId;
  if (!tmp) {
    const obj2 = { type: "LIVE_CHANNEL_NOTICE_HIDE", eventId, stageId };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
export function hideUpcomingEventNotice(eventId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE", eventId };
  obj.dispatch(obj2);
}
export function markUpcomingEventNoticeAsSeen(guildEventId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN", guildEventId };
  obj.dispatch(obj2);
}
export function dismissEventBanner(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EVENT_BANNER_DISMISS", eventId: id };
  obj.dispatch(obj2);
}
