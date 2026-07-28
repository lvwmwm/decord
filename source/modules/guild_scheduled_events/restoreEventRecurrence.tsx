// Module ID: 12245
// Function ID: 95588
// Name: restoreEventRecurrence
// Dependencies: [8184, 2]
// Exports: default

// Module 12245 (restoreEventRecurrence)
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = importDefault(8184).deleteGuildEventException(guild_id, id, event_exception_id);
      const obj3 = importDefault(8184);
    }
    return result;
  }
  let obj = importDefault(8184);
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
};
