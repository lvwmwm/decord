// Module ID: 9028
// Function ID: 9029
// Name: restoreEventRecurrence
// Dependencies: [8834, 2]
// Exports: default

// Module 9028 (restoreEventRecurrence)
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, c2) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = importDefault(8834).deleteGuildEventException(guild_id, id, c2);
      const obj3 = importDefault(8834);
    }
    return result;
  }
  let obj = importDefault(8834);
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, c2);
};
