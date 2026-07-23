// Module ID: 8351
// Function ID: 66504
// Name: _getEventException
// Dependencies: [6758, 566, 2]
// Exports: default, getEventException

// Module 8351 (_getEventException)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _getEventException(arr, arg1) {
  let closure_0 = arg1;
  let found;
  if (null != arr) {
    found = arr.find((event_exception_id) => event_exception_id.event_exception_id === closure_0);
  }
  return found;
}
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default function useEventException(arg0, arg1) {
  const _require = arg1;
  const items = [_isNativeReflectConstruct];
  return _getEventException(_require(566).useStateFromStoresArray(items, () => {
    const guildScheduledEvent = outer1_2.getGuildScheduledEvent(closure_0);
    let prop;
    if (null != guildScheduledEvent) {
      prop = guildScheduledEvent.guild_scheduled_event_exceptions;
    }
    if (null == prop) {
      prop = [];
    }
    return prop;
  }), arg0);
};
export const getEventException = function getEventException(recurrenceId, id) {
  guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(id);
  let prop;
  if (null != guildScheduledEvent) {
    prop = guildScheduledEvent.guild_scheduled_event_exceptions;
  }
  if (null == prop) {
    prop = [];
  }
  return _getEventException(prop, recurrenceId);
};
