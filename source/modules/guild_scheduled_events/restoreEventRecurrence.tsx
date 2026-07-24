// Module ID: 12225
// Function ID: 95604
// Name: restoreEventRecurrence
// Dependencies: [8388, 2]
// Exports: default

// Module 12225 (restoreEventRecurrence)
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = importDefault(8388).deleteGuildEventException(guild_id, id, event_exception_id);
      const obj3 = importDefault(8388);
    }
    return result;
  }
  let obj = importDefault(8388);
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
};
