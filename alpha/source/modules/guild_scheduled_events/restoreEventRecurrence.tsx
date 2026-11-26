// Module ID: 14335
// Function ID: 14336
// Name: restoreEventRecurrence
// Dependencies: [8478, 2]
// Exports: default

// Module 14335 (restoreEventRecurrence)
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8478 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    let result;
    if (null == scheduled_end_time) {
      const obj3 = GuildScheduledEventsActionCreatorsDefault;
      result = obj3.deleteGuildEventException(guild_id, id, event_exception_id);
    }
    return result;
  }
  const obj = GuildScheduledEventsActionCreatorsDefault;
  const obj2 = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj2, guild_id, id, event_exception_id);
};
