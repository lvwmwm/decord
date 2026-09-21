// Module ID: 9748
// Function ID: 9749
// Name: GuildScheduledEventUtils
// Dependencies: [2051, 4352, 11, 2]
// Exports: getNextShownUpcomingEventNoticeType

// Module 9748 (GuildScheduledEventUtils)
import _modDef4352 from "module_4352" /* 4352 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import size from "module_2" /* 2 */;

({ UpcomingGuildEventNoticeTypes: c2, NEW_EVENT_WINDOW_MILLISECONDS: c3, EVENT_STARTING_SOON_WINDOW_MILLISECONDS: closure_4, ACKED_RECENTLY_WINDOW_DAYS: hasOwnProperty } = GuildScheduledEventsConstants);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventUtils.tsx");

export const getNextShownUpcomingEventNoticeType = function getNextShownUpcomingEventNoticeType(guildScheduledEvent, arg1, arg2, flag) {
  const obj = _modDef4352();
  const time = new Date(guildScheduledEvent.scheduled_start_time).getTime();
  const diff = time - React4;
  if (obj.isBetween(diff, time)) {
    if (null != arg1) {
      const obj4 = tmp(4352)(arg1);
      const isBetweenResult = obj4.isBetween(diff, time);
      let EVENT_STARTING_SOON;
      if (!isBetweenResult) {
        if (!obj4.isBetween(obj5.subtract(hasOwnProperty, "days"), time)) {
          EVENT_STARTING_SOON = constants.EVENT_STARTING_SOON;
        }
      }
      return EVENT_STARTING_SOON;
    } else {
      return constants.EVENT_STARTING_SOON;
    }
  } else {
    let tmp5 = arg2;
    const extractTimestampResult = tmp(11).extractTimestamp(guildScheduledEvent.id);
    if (arg2 == null) {
      tmp5 = extractTimestampResult;
    }
    if (obj.isBetween(extractTimestampResult, Math.min(tmp5 + React3, time))) {
      if (null == arg1) {
        if (!flag) {
          return constants.NEW_EVENT;
        }
      }
    }
  }
  const date = new Date(guildScheduledEvent.scheduled_start_time);
};
