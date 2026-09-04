// Module ID: 9826
// Function ID: 9827
// Name: restoreEventRecurrence
// Dependencies: [9632, 2]
// Exports: default

// Module 9826 (restoreEventRecurrence)
import set from "set" /* 2 */;
import _modDef9632 from "module_9632" /* 9632 */;

let result = set.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = _modDef9632.deleteGuildEventException(guild_id, id, event_exception_id);
      const obj3 = _modDef9632;
    }
    return result;
  }
  let obj = _modDef9632;
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
};
