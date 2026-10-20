// Module ID: 9070
// Function ID: 9071
// Name: restoreEventRecurrence
// Dependencies: [8820, 2]
// Exports: default

// Module 9070 (restoreEventRecurrence)
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8820 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, c2) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    let result;
    if (null == scheduled_end_time) {
      const obj3 = GuildScheduledEventsActionCreatorsDefault;
      result = obj3.deleteGuildEventException(guild_id, id, c2);
    }
    return result;
  }
  const obj = GuildScheduledEventsActionCreatorsDefault;
  const obj2 = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj2, guild_id, id, c2);
};
