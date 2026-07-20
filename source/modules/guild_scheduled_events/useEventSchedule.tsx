// Module ID: 8341
// Function ID: 66438
// Name: _getEventSchedule
// Dependencies: []
// Exports: default, getEventSchedule, useEventScheduleById

// Module 8341 (_getEventSchedule)
function _getEventSchedule(stateFromStores, eventException, nextRecurrenceIdInEvent) {
  let endDate;
  let startDate;
  if (null != stateFromStores.recurrence_rule) {
    if (null != nextRecurrenceIdInEvent) {
      let toDateResult;
      let obj = eventException(dependencyMap[1]);
      const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, stateFromStores);
      const scheduleForRecurrenceWithException = eventException(dependencyMap[1]).getScheduleForRecurrenceWithException(baseScheduleForRecurrence, eventException);
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
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default function useEventSchedule(id, nextRecurrenceIdInEvent) {
  if (null == nextRecurrenceIdInEvent) {
    nextRecurrenceIdInEvent = nextRecurrenceIdInEvent(dependencyMap[1]).getNextRecurrenceIdInEvent(id);
    const obj = nextRecurrenceIdInEvent(dependencyMap[1]);
  }
  return _getEventSchedule(id, importDefault(dependencyMap[2])(nextRecurrenceIdInEvent, id.id), nextRecurrenceIdInEvent);
};
export const useEventScheduleById = function useEventScheduleById(guildEventId, recurrenceId) {
  let nextRecurrenceIdInEvent = recurrenceId;
  recurrenceId = guildEventId;
  const items = [closure_3];
  const stateFromStores = recurrenceId(dependencyMap[3]).useStateFromStores(items, () => guildScheduledEvent.getGuildScheduledEvent(arg0));
  if (null == recurrenceId) {
    nextRecurrenceIdInEvent = recurrenceId(dependencyMap[1]).getNextRecurrenceIdInEvent(stateFromStores);
    const obj2 = recurrenceId(dependencyMap[1]);
  }
  importDefault(dependencyMap[2]);
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
  return _getEventSchedule(guildEvent, recurrenceId(dependencyMap[2]).getEventException(recurrenceId, guildEvent.id), recurrenceId);
};
