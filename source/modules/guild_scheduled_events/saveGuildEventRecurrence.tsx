// Module ID: 8367
// Function ID: 66705
// Name: saveGuildEventRecurrence
// Dependencies: [8346, 8344, 21, 2]
// Exports: default

// Module 8367 (saveGuildEventRecurrence)
let result = require("DISCORD_EPOCH").fileFinishedImporting("modules/guild_scheduled_events/saveGuildEventRecurrence.tsx");

export default function saveGuildEventRecurrence(guild_id, event_exception_id, startDate, event_exception_id) {
  let obj = require(8346) /* getNextBucketedTime */;
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(event_exception_id, guild_id);
  startDate = null;
  if (!obj2.areDatesIdentical(baseScheduleForRecurrence.startDate, startDate.startDate)) {
    startDate = startDate.startDate;
  }
  obj2 = require(8346) /* getNextBucketedTime */;
  let endDate = null;
  if (!obj3.areDatesIdentical(baseScheduleForRecurrence.endDate, startDate.endDate)) {
    endDate = startDate.endDate;
  }
  if (null != event_exception_id) {
    const result = require(8346) /* getNextBucketedTime */.areSchedulesIdentical(startDate, baseScheduleForRecurrence);
    const obj5 = importDefault(8344);
    if (result) {
      let result1 = obj5.deleteGuildEventException(guild_id.guild_id, guild_id.id, event_exception_id.event_exception_id);
    } else {
      obj = {};
      let toISOStringResult;
      if (null != startDate) {
        toISOStringResult = startDate.toISOString();
      }
      obj.scheduled_start_time = toISOStringResult;
      let toISOStringResult1;
      if (null != endDate) {
        toISOStringResult1 = endDate.toISOString();
      }
      obj.scheduled_end_time = toISOStringResult1;
      obj.is_canceled = event_exception_id.is_canceled;
      result1 = obj5.updateGuildEventException(obj, guild_id.guild_id, guild_id.id, event_exception_id);
    }
    return result1;
  } else {
    const extractTimestampResult = importDefault(21).extractTimestamp(event_exception_id);
    const obj7 = importDefault(21);
    obj = {};
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj.original_scheduled_start_time = date.toISOString();
    let toISOStringResult2;
    if (null != startDate) {
      toISOStringResult2 = startDate.toISOString();
    }
    obj.scheduled_start_time = toISOStringResult2;
    let toISOStringResult3;
    if (null != endDate) {
      toISOStringResult3 = endDate.toISOString();
    }
    obj.scheduled_end_time = toISOStringResult3;
    obj.is_canceled = false;
    return importDefault(8344).createGuildEventException(obj, guild_id.guild_id, guild_id.id);
  }
  obj3 = require(8346) /* getNextBucketedTime */;
};
