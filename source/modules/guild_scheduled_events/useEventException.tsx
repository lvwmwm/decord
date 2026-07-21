// Module ID: 8344
// Function ID: 66455
// Name: _getEventException
// Dependencies: [31, 689, 3847]
// Exports: default, getEventException

// Module 8344 (_getEventException)
import module_31 from "module_31";
import context from "context";

function _getEventException(arr, arg1) {
  let found;
  if (null != arr) {
    found = arr.find((event_exception_id) => event_exception_id.event_exception_id === arg1);
  }
  return found;
}
const result = context.fileFinishedImporting("modules/guild_scheduled_events/useEventException.tsx");

export default function useEventException(arg0, arg1) {
  const items = [module_31];
  return _getEventException(arg1(dependencyMap[1]).useStateFromStoresArray(items, () => {
    const guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(arg1);
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
  const guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(id);
  let prop;
  if (null != guildScheduledEvent) {
    prop = guildScheduledEvent.guild_scheduled_event_exceptions;
  }
  if (null == prop) {
    prop = [];
  }
  return _getEventException(prop, recurrenceId);
};
