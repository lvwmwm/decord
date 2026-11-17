// Module ID: 7989
// Function ID: 7990
// Name: GuildEventRsvpUtils
// Dependencies: [502, 7037, 5165, 1113, 7990, 7991, 7983, 2]
// Exports: getExistingRsvp, getResponseOptions, handleRsvp

// Module 7989 (GuildEventRsvpUtils)
import intl3 from "intl" /* 1113 */;
import ScheduleUtils from "ScheduleUtils" /* 7983 */;
import useEventException from "useEventException" /* 7990 */;
import useEventSchedule from "useEventSchedule" /* 7991 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 5165 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ GuildScheduledEventUserResponses: closure_4, GuildScheduledEventStatusDone: hasOwnProperty } = GuildScheduledEventsConstants);
const ResponseOptions = { SERIES: 0, [0]: "SERIES", RECURRENCE: 1, [1]: "RECURRENCE" };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/GuildEventRsvpUtils.tsx");

export function getExistingRsvp(id, c1) {
  return GuildScheduledEventStore.getRsvp(id, c1, AuthenticationStore.getId());
}
export { ResponseOptions };
export function getResponseOptions() {
  let intl;
  let intl2;
  let obj;
  obj = { name: intl.string(intl3.t.uoorxi), value: obj.SERIES };
  intl = intl3.intl;
  const items = [obj, ];
  const obj2 = { name: intl2.string(intl3.t.lwZCFT), value: obj.RECURRENCE };
  intl2 = intl3.intl;
  items[1] = obj2;
  return items;
}
export function handleRsvp(openRsvpPicker) {
  let eventId;
  let guildId;
  let onRsvp;
  let recurrenceId;
  let updateRsvp;
  ({ eventId, recurrenceId, guildId, updateRsvp, onRsvp } = openRsvpPicker);
  openRsvpPicker = openRsvpPicker.openRsvpPicker;
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
  const obj = GuildScheduledEventStore;
  if (null != guildScheduledEvent) {
    let tmp11;
    const obj3 = useEventException;
    const eventException = obj3.getEventException(recurrenceId, eventId);
    let scheduled_start_time;
    const obj4 = useEventSchedule;
    const startTime = obj4.getEventSchedule(guildScheduledEvent, recurrenceId).startTime;
    if (guildScheduledEvent != null) {
      scheduled_start_time = guildScheduledEvent.scheduled_start_time;
    }
    let recurrenceStatus = null;
    if (null != scheduled_start_time) {
      let scheduled_start_time1;
      const getRecurrenceStatus = ScheduleUtils.getRecurrenceStatus;
      const _Date = Date;
      ScheduleUtils;
      if (guildScheduledEvent != null) {
        scheduled_start_time1 = guildScheduledEvent.scheduled_start_time;
      }
      const self = this;
      const self2 = this;
      const _Date1 = new _Date(scheduled_start_time1);
      recurrenceStatus = getRecurrenceStatus(eventException, startTime, _Date1);
    }
    if (null == recurrenceStatus) {
      if (recurrenceId == null) {
        const tmp32Result2 = ScheduleUtils;
        recurrenceId = tmp32Result2.getNextRecurrenceIdInEvent(guildScheduledEvent);
      }
      tmp11 = recurrenceId;
    } else {
      tmp11 = null;
    }
    const rsvp = obj.getRsvp(guildScheduledEvent.id, undefined, AuthenticationStore.getId());
    const id = guildScheduledEvent.id;
    if (null == tmp11) {
      let INTERESTED;
      if (null != rsvp) {
        INTERESTED = constants.UNINTERESTED;
      } else {
        INTERESTED = constants.INTERESTED;
      }
      updateRsvp(eventId, null, guildId, INTERESTED);
      if (onRsvp != null) {
        onRsvp();
      }
    } else if (null != tmp14) {
      let UNINTERESTED;
      if (null != rsvp) {
        UNINTERESTED = constants.INTERESTED;
      } else {
        UNINTERESTED = constants.UNINTERESTED;
      }
      updateRsvp(eventId, tmp11, guildId, UNINTERESTED);
      if (onRsvp != null) {
        onRsvp();
      }
    } else {
      openRsvpPicker(guildScheduledEvent, tmp11);
    }
  }
}
