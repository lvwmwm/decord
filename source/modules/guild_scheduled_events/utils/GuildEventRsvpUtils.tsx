// Module ID: 8350
// Function ID: 66500
// Name: getExistingRsvp
// Dependencies: [1194, 6758, 1354, 1212, 8351, 8352, 8346, 2]
// Exports: getResponseOptions, handleRsvp

// Module 8350 (getExistingRsvp)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";

let closure_4;
let closure_5;
const require = arg1;
function getExistingRsvp(id, arg1) {
  return store.getRsvp(id, arg1, id.getId());
}
({ GuildScheduledEventUserResponses: closure_4, GuildScheduledEventStatusDone: closure_5 } = GUILD_EVENT_MAX_NAME_LENGTH);
let obj = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export { getExistingRsvp };
export const ResponseOptions = obj;
export const getResponseOptions = function getResponseOptions() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t.uoorxi);
  obj.value = obj.SERIES;
  const items = [obj, ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.name = intl2.string(require(1212) /* getSystemLocale */.t.lwZCFT);
  obj.value = obj.RECURRENCE;
  items[1] = obj;
  return items;
};
export const handleRsvp = function handleRsvp(openRsvpPicker) {
  let eventId;
  let guildId;
  let onRsvp;
  let recurrenceId;
  let updateRsvp;
  ({ eventId, recurrenceId, guildId, updateRsvp, onRsvp } = openRsvpPicker);
  const guildScheduledEvent = store.getGuildScheduledEvent(eventId);
  if (null != guildScheduledEvent) {
    const eventException = require(8351) /* _getEventException */.getEventException(recurrenceId, eventId);
    const obj3 = require(8351) /* _getEventException */;
    let scheduled_start_time;
    if (null != guildScheduledEvent) {
      scheduled_start_time = guildScheduledEvent.scheduled_start_time;
    }
    let recurrenceStatus = null;
    if (null != scheduled_start_time) {
      let _Date = Date;
      let scheduled_start_time1;
      if (null != guildScheduledEvent) {
        scheduled_start_time1 = guildScheduledEvent.scheduled_start_time;
      }
      const prototype = _Date.prototype;
      _Date = new _Date(scheduled_start_time1);
      recurrenceStatus = require(8346) /* getNextBucketedTime */.getRecurrenceStatus(eventException, obj4.getEventSchedule(guildScheduledEvent, recurrenceId).startTime, _Date);
      const obj = require(8346) /* getNextBucketedTime */;
    }
    if (null == recurrenceStatus) {
      if (null == recurrenceId) {
        recurrenceId = require(8346) /* getNextBucketedTime */.getNextRecurrenceIdInEvent(guildScheduledEvent);
        const obj2 = require(8346) /* getNextBucketedTime */;
      }
      let tmp14 = recurrenceId;
    } else {
      tmp14 = null;
    }
    const tmp18 = getExistingRsvp(guildScheduledEvent.id);
    if (null == tmp14) {
      if (null != tmp18) {
        let INTERESTED = constants.UNINTERESTED;
      } else {
        INTERESTED = constants.INTERESTED;
      }
      updateRsvp(eventId, null, guildId, INTERESTED);
      if (null != onRsvp) {
        onRsvp();
      }
    } else if (null != tmp19) {
      if (null != tmp18) {
        let UNINTERESTED = constants.INTERESTED;
      } else {
        UNINTERESTED = constants.UNINTERESTED;
      }
      updateRsvp(eventId, tmp14, guildId, UNINTERESTED);
      if (null != onRsvp) {
        onRsvp();
      }
    } else {
      openRsvpPicker.openRsvpPicker(guildScheduledEvent, tmp14);
    }
    obj4 = require(8352) /* _getEventSchedule */;
  }
};
