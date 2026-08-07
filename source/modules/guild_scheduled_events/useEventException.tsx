// Module ID: 8887
// Function ID: 8888
// Name: useEventException
// Dependencies: [6925, 589, 2]
// Exports: default, getEventException

// Module 8887 (useEventException)
import scheduledEventSort from "scheduledEventSort";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default function useEventException(arg0, arg1) {
  let _require = arg1;
  const items = [scheduledEventSort];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const guildScheduledEvent = outer1_2.getGuildScheduledEvent(closure_0);
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
export const getEventException = function getEventException(recurrenceId, eventId) {
  guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(eventId);
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
};
