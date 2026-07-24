// Module ID: 8501
// Function ID: 67728
// Name: getNextShownUpcomingEventNoticeType
// Dependencies: [1354, 3712, 21, 2]
// Exports: getNextShownUpcomingEventNoticeType

// Module 8501 (getNextShownUpcomingEventNoticeType)
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
({ UpcomingGuildEventNoticeTypes: closure_2, NEW_EVENT_WINDOW_MILLISECONDS: closure_3, EVENT_STARTING_SOON_WINDOW_MILLISECONDS: closure_4, ACKED_RECENTLY_WINDOW_DAYS: closure_5 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventUtils.tsx");

export const getNextShownUpcomingEventNoticeType = function getNextShownUpcomingEventNoticeType(guildScheduledEvent, arg1, arg2, arg3) {
  let obj = importDefault(3712)();
  const time = new Date(guildScheduledEvent.scheduled_start_time).getTime();
  obj = { start: time - closure_4, end: time };
  if (obj.isBetween(obj.start, obj.end)) {
    if (null != arg1) {
      const obj5 = importDefault(3712)(arg1);
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
    const extractTimestampResult = importDefault(21).extractTimestamp(guildScheduledEvent.id);
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
