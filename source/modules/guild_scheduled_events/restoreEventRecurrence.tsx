// Module ID: 12202
// Function ID: 95418
// Name: restoreEventRecurrence
// Dependencies: [8146, 2]
// Exports: default

// Module 12202 (restoreEventRecurrence)
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = importDefault(8146).deleteGuildEventException(guild_id, id, event_exception_id);
      const obj3 = importDefault(8146);
    }
    return result;
  }
  let obj = importDefault(8146);
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
};
