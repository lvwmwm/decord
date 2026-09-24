// Module ID: 9875
// Function ID: 9876
// Name: GuildEventRsvpUtils
// Dependencies: [502, 7856, 2050, 1115, 9841, 9840, 9837, 2]
// Exports: getExistingRsvp, getResponseOptions, handleRsvp

// Module 9875 (GuildEventRsvpUtils)
import util from "util" /* 1115 */;
import useEventSchedule from "useEventSchedule" /* 9840 */;
import useEventException from "useEventException" /* 9841 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7856 */;

require = fn;
const GuildScheduledEventsConstants = fn(2050);
({ GuildScheduledEventUserResponses: closure_4, GuildScheduledEventStatusDone: hasOwnProperty } = GuildScheduledEventsConstants);
const ResponseOptions = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export const getExistingRsvp = function getExistingRsvp(id, c1) {
  return GuildScheduledEventStore.getRsvp(id, c1, AuthenticationStore.getId());
};
export { ResponseOptions };
export const getResponseOptions = function getResponseOptions() {
  const obj = { name: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.uoorxi);
  obj.value = obj.SERIES;
  const items = [obj, ];
  const obj2 = { name: null, value: null };
  const intl2 = util.intl;
  obj2.name = intl2.string(util.t.lwZCFT);
  obj2.value = obj.RECURRENCE;
  items[1] = obj2;
  return items;
};
export const handleRsvp = function handleRsvp(openRsvpPicker) {
  ({ eventId, recurrenceId, guildId, updateRsvp, onRsvp } = openRsvpPicker);
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
  if (null != guildScheduledEvent) {
    const eventException = useEventException.getEventException(recurrenceId, eventId);
    let scheduled_start_time;
    if (guildScheduledEvent != null) {
      scheduled_start_time = guildScheduledEvent.scheduled_start_time;
    }
    let recurrenceStatus = null;
    if (null != scheduled_start_time) {
      let scheduled_start_time1;
      if (guildScheduledEvent != null) {
        scheduled_start_time1 = guildScheduledEvent.scheduled_start_time;
      }
      const date = new Date(scheduled_start_time1);
      recurrenceStatus = tmp33(9837).getRecurrenceStatus(eventException, obj5.getEventSchedule(guildScheduledEvent, recurrenceId).startTime, date);
      const tmp33Result = tmp33(9837);
    }
    if (null == recurrenceStatus) {
      if (recurrenceId == null) {
        recurrenceId = tmp33(9837).getNextRecurrenceIdInEvent(guildScheduledEvent);
        const tmp33Result2 = tmp33(9837);
      }
      let tmp12 = recurrenceId;
    } else {
      tmp12 = null;
    }
    const rsvp = GuildScheduledEventStore.getRsvp(guildScheduledEvent.id, undefined, AuthenticationStore.getId());
    const id = guildScheduledEvent.id;
    if (null == tmp12) {
      if (null != rsvp) {
        let INTERESTED = constants.UNINTERESTED;
      } else {
        INTERESTED = constants.INTERESTED;
      }
      updateRsvp(eventId, null, guildId, INTERESTED);
      if (onRsvp != null) {
        onRsvp();
      }
    } else if (null != tmp15) {
      if (null != rsvp) {
        let UNINTERESTED = constants.INTERESTED;
      } else {
        UNINTERESTED = constants.UNINTERESTED;
      }
      updateRsvp(eventId, tmp12, guildId, UNINTERESTED);
      if (onRsvp != null) {
        onRsvp();
      }
    } else {
      openRsvpPicker.openRsvpPicker(guildScheduledEvent, tmp12);
    }
    obj5 = useEventSchedule;
  }
};
