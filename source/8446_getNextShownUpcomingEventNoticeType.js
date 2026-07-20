// Module ID: 8446
// Function ID: 67428
// Name: getNextShownUpcomingEventNoticeType
// Dependencies: [0, 4294967295, 0, 0]
// Exports: getNextShownUpcomingEventNoticeType

// Module 8446 (getNextShownUpcomingEventNoticeType)
import result from "result";
import result from "result";

({ UpcomingGuildEventNoticeTypes: closure_2, NEW_EVENT_WINDOW_MILLISECONDS: closure_3, EVENT_STARTING_SOON_WINDOW_MILLISECONDS: closure_4, ACKED_RECENTLY_WINDOW_DAYS: closure_5 } = result);
result = result.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventUtils.tsx");

export const getNextShownUpcomingEventNoticeType = function getNextShownUpcomingEventNoticeType(guildScheduledEvent, arg1, arg2, arg3) {
  let obj = importDefault(dependencyMap[1])();
  const time = new Date(guildScheduledEvent.scheduled_start_time).getTime();
  obj = { start: time - closure_4, end: time };
  if (obj.isBetween(obj.start, obj.end)) {
    if (null != arg1) {
      const obj5 = importDefault(dependencyMap[1])(arg1);
      const isBetweenResult = obj5.isBetween(obj.start, obj.end);
      let EVENT_STARTING_SOON;
      if (!isBetweenResult) {
        if (!obj5.isBetween(obj6.subtract(closure_5, "days"), time)) {
          EVENT_STARTING_SOON = constants.EVENT_STARTING_SOON;
        }
      }
      return EVENT_STARTING_SOON;
    } else {
      return constants.EVENT_STARTING_SOON;
    }
  } else {
    const extractTimestampResult = importDefault(dependencyMap[2]).extractTimestamp(guildScheduledEvent.id);
    let tmp6 = extractTimestampResult;
    if (null != arg2) {
      tmp6 = arg2;
    }
    if (obj.isBetween(extractTimestampResult, Math.min(tmp6 + closure_3, time))) {
      if (null == arg1) {
        if (!arg3) {
          return constants.NEW_EVENT;
        }
      }
    }
  }
  const date = new Date(guildScheduledEvent.scheduled_start_time);
};
