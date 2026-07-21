// Module ID: 12080
// Function ID: 93175
// Name: restoreEventRecurrence
// Dependencies: []
// Exports: default

// Module 12080 (restoreEventRecurrence)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  let scheduled_end_time;
  let scheduled_start_time;
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = importDefault(dependencyMap[0]).deleteGuildEventException(guild_id, id, event_exception_id);
      const obj3 = importDefault(dependencyMap[0]);
    }
    return result;
  }
  let obj = importDefault(dependencyMap[0]);
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
};
