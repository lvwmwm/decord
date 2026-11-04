// Module ID: 8976
// Function ID: 8977
// Name: useEventException
// Dependencies: [6855, 504, 2]
// Exports: default, getEventException

// Module 8976 (useEventException)
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default function useEventException(arg0, arg1) {
  let closure_0;
  _require = arg1;
  let obj = require("get initialized");
  let items = [GuildScheduledEventStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(closure_0);
    let prop;
    if (guildScheduledEvent != null) {
      prop = guildScheduledEvent.guild_scheduled_event_exceptions;
    }
    if (prop == null) {
      prop = [];
    }
    return prop;
  });
  _require = arg0;
  let found;
  if (stateFromStoresArray != null) {
    found = stateFromStoresArray.find((event_exception_id) => event_exception_id.event_exception_id === closure_0);
  }
  return found;
};
export function getEventException(recurrenceId, eventId) {
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
  let prop;
  if (guildScheduledEvent != null) {
    prop = guildScheduledEvent.guild_scheduled_event_exceptions;
  }
  if (prop == null) {
    prop = [];
  }
  let closure_0 = recurrenceId;
  let found;
  if (prop != null) {
    found = prop.find((event_exception_id) => event_exception_id.event_exception_id === closure_0);
  }
  return found;
}
