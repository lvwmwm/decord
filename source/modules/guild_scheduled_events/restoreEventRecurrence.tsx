// Module ID: 12289
// Function ID: 12290
// Name: restoreEventRecurrence
// Dependencies: [8212, 2]
// Exports: default

// Module 12289 (restoreEventRecurrence)
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, c2) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = importDefault(8212).deleteGuildEventException(guild_id, id, c2);
      const obj3 = importDefault(8212);
    }
    return result;
  }
  let obj = importDefault(8212);
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, c2);
};
