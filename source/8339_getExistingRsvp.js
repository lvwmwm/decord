// Module ID: 8339
// Function ID: 66428
// Name: getExistingRsvp
// Dependencies: []
// Exports: getResponseOptions, handleRsvp

// Module 8339 (getExistingRsvp)
function getExistingRsvp(id, arg1) {
  return store.getRsvp(id, arg1, id.getId());
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ GuildScheduledEventUserResponses: closure_4, GuildScheduledEventStatusDone: closure_5 } = arg1(dependencyMap[2]));
const obj = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export { getExistingRsvp };
export const ResponseOptions = obj;
export const getResponseOptions = function getResponseOptions() {
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.name = intl.string(arg1(dependencyMap[3]).t.uoorxi);
  obj.value = obj.SERIES;
  const items = [obj, ];
  obj = {};
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.name = intl2.string(arg1(dependencyMap[3]).t.lwZCFT);
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
    const eventException = arg1(dependencyMap[4]).getEventException(recurrenceId, eventId);
    const obj3 = arg1(dependencyMap[4]);
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
      recurrenceStatus = arg1(dependencyMap[6]).getRecurrenceStatus(eventException, obj4.getEventSchedule(guildScheduledEvent, recurrenceId).startTime, _Date);
      const obj = arg1(dependencyMap[6]);
    }
    if (null == recurrenceStatus) {
      if (null == recurrenceId) {
        recurrenceId = arg1(dependencyMap[6]).getNextRecurrenceIdInEvent(guildScheduledEvent);
        const obj2 = arg1(dependencyMap[6]);
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
    const obj4 = arg1(dependencyMap[5]);
  }
};
