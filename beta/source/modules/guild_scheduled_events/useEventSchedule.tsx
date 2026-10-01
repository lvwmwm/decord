// Module ID: 8949
// Function ID: 8950
// Name: useEventSchedule
// Dependencies: [6946, 8946, 8950, 504, 2]
// Exports: default, getEventSchedule, useEventScheduleById

// Module 8949 (useEventSchedule)
import ScheduleUtils from "ScheduleUtils" /* 8946 */;
import useEventException from "useEventException" /* 8950 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useEventExceptionDefault = useEventException;
let _require;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useEventSchedule.tsx");

export default function useEventSchedule(recurrence_rule, nextRecurrenceIdInEvent) {
  let date1;
  let endDate;
  let startDate;
  let toDateResult;
  if (nextRecurrenceIdInEvent == null) {
    const obj = ScheduleUtils;
    nextRecurrenceIdInEvent = obj.getNextRecurrenceIdInEvent(recurrence_rule);
  }
  if (null != recurrence_rule.recurrence_rule) {
    let obj4;
    if (null != nextRecurrenceIdInEvent) {
      const obj2 = ScheduleUtils;
      const baseScheduleForRecurrence = obj2.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, recurrence_rule);
      const obj3 = ScheduleUtils;
      const scheduleForRecurrenceWithException = obj3.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp5);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      obj4 = { startTime: startDate.toDate(), endTime: toDateResult };
      toDateResult = undefined;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
    }
    return obj4;
  }
  const obj5 = { startTime: new Date(recurrence_rule.scheduled_start_time), endTime: date1 };
  date1 = null;
  new Date(recurrence_rule.scheduled_start_time);
  if (null != recurrence_rule.scheduled_end_time) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date(recurrence_rule.scheduled_end_time);
  }
  obj4 = obj5;
};
export const useEventScheduleById = function useEventScheduleById(guildEventId, recurrenceId) {
  let date;
  let date1;
  let endDate;
  let startDate;
  let toDateResult;
  _require = guildEventId;
  let nextRecurrenceIdInEvent = recurrenceId;
  const items = [GuildScheduledEventStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(guildEventId));
  if (recurrenceId == null) {
    const tmp2Result = require("ScheduleUtils");
    nextRecurrenceIdInEvent = tmp2Result.getNextRecurrenceIdInEvent(stateFromStores);
  }
  useEventExceptionDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp7 = null;
  if (null != stateFromStores) {
    if (null != stateFromStores.recurrence_rule) {
      let obj2;
      if (null != nextRecurrenceIdInEvent) {
        const tmp2Result3 = require("ScheduleUtils");
        const baseScheduleForRecurrence = tmp2Result3.getBaseScheduleForRecurrence(nextRecurrenceIdInEvent, stateFromStores);
        const tmp2Result4 = require("ScheduleUtils");
        const scheduleForRecurrenceWithException = tmp2Result4.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp6);
        ({ startDate, endDate } = scheduleForRecurrenceWithException);
        obj2 = { startTime: startDate.toDate(), endTime: toDateResult };
        toDateResult = undefined;
        if (endDate != null) {
          toDateResult = endDate.toDate();
        }
      }
      tmp7 = obj2;
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj3 = { startTime: date, endTime: date1 };
    date1 = null;
    date = new Date(stateFromStores.scheduled_start_time);
    if (null != stateFromStores.scheduled_end_time) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(stateFromStores.scheduled_end_time);
    }
    obj2 = obj3;
  }
  return tmp7;
};
export const getEventSchedule = function getEventSchedule(guildEvent, recurrenceId) {
  let date1;
  let endDate;
  let startDate;
  let toDateResult;
  useEventException;
  if (null != guildEvent.recurrence_rule) {
    let obj;
    if (null != recurrenceId) {
      const tmpResult = ScheduleUtils;
      const baseScheduleForRecurrence = tmpResult.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
      const tmpResult2 = ScheduleUtils;
      const scheduleForRecurrenceWithException = tmpResult2.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp4);
      ({ startDate, endDate } = scheduleForRecurrenceWithException);
      obj = { startTime: startDate.toDate(), endTime: toDateResult };
      toDateResult = undefined;
      if (endDate != null) {
        toDateResult = endDate.toDate();
      }
    }
    return obj;
  }
  const obj2 = { startTime: new Date(guildEvent.scheduled_start_time), endTime: date1 };
  date1 = null;
  new Date(guildEvent.scheduled_start_time);
  if (null != guildEvent.scheduled_end_time) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date(guildEvent.scheduled_end_time);
  }
  obj = obj2;
};
