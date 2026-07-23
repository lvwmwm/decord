// Module ID: 8352
// Function ID: 66510
// Name: _getEventSchedule
// Dependencies: [6758, 8346, 8351, 566, 2]
// Exports: default, getEventSchedule, useEventScheduleById

// Module 8352 (_getEventSchedule)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _getEventSchedule(stateFromStores, eventException, nextRecurrenceIdInEvent) {
  let endDate;
  let startDate;
  if (null != stateFromStores.recurrence_rule) {
    if (null != nextRecurrenceIdInEvent) {
      let toDateResult;
      let obj = require(8346) /* getNextBucketedTime */;
      const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, stateFromStores);
      const scheduleForRecurrenceWithException = require(8346) /* getNextBucketedTime */.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, eventException);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      obj = { startTime: startDate.toDate() };
      if (null != endDate) {
        toDateResult = endDate.toDate();
      }
      obj.endTime = toDateResult;
      return obj;
    }
  }
  obj = { startTime: new Date(stateFromStores.scheduled_start_time) };
  let date1 = null;
  if (null != stateFromStores.scheduled_end_time) {
    const _Date = Date;
    date1 = new Date(stateFromStores.scheduled_end_time);
  }
  obj.endTime = date1;
  return obj;
}
const result = require("_getEventException").fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default function useEventSchedule(id, nextRecurrenceIdInEvent) {
  if (null == nextRecurrenceIdInEvent) {
    nextRecurrenceIdInEvent = require(8346) /* getNextBucketedTime */.getNextRecurrenceIdInEvent(id);
    const obj = require(8346) /* getNextBucketedTime */;
  }
  return _getEventSchedule(id, importDefault(8351)(nextRecurrenceIdInEvent, id.id), nextRecurrenceIdInEvent);
};
export const useEventScheduleById = function useEventScheduleById(guildEventId, recurrenceId) {
  let nextRecurrenceIdInEvent = recurrenceId;
  const _require = guildEventId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_3.getGuildScheduledEvent(closure_0));
  if (null == recurrenceId) {
    nextRecurrenceIdInEvent = _require(8346).getNextRecurrenceIdInEvent(stateFromStores);
    const obj2 = _require(8346);
  }
  importDefault(8351);
  if (null != stateFromStores) {
    const id = stateFromStores.id;
  }
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = _getEventSchedule(stateFromStores, tmp6, nextRecurrenceIdInEvent);
  }
  return tmp7;
};
export const getEventSchedule = function getEventSchedule(guildEvent, recurrenceId) {
  return _getEventSchedule(guildEvent, require(8351) /* _getEventException */.getEventException(recurrenceId, guildEvent.id), recurrenceId);
};
