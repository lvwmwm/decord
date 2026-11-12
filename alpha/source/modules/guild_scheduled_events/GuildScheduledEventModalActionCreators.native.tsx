// Module ID: 7899
// Function ID: 7900
// Name: GuildScheduledEventModalActionCreators
// Dependencies: [5, 5098, 7900, 5489, 7901, 2118, 7906, 15813, 2]
// Exports: openEndEventModal, transitionToEventDetailsFromInvite

// Module 7899 (GuildScheduledEventModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 5098 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 7900 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3;

let tmp3;
const ScheduleUtils = tmp3(7906);
function openGuildEventDetails(arg0) {
  let event;
  let eventId;
  let onClose;
  let recurrenceId;
  ({ event, recurrenceId } = arg0);
  ({ eventId, onClose } = arg0);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  obj = { eventId, event, onCloseActionSheet: onClose, recurrenceId };
  const tmp4 = asyncRequire(7901, dependencyMap.paths);
  const tmp5 = closure_5;
  if (recurrenceId == null) {
    const tmp3Result = ScheduleUtils;
    recurrenceId = tmp3Result.getNextRecurrenceIdInEvent(event);
  }
  openLazy(tmp4, tmp5, obj, "stack");
}
let obj = function _transitionToEventDetailsFromInvite() {
  obj = _asyncToGenerator(async (event, arg1) => {
    let recurrenceId = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: Promise.resolve(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            obj = { eventId: event.id, event, recurrenceId };
            recurrenceId = undefined;
            const tmp7 = closure_131_6;
            if (recurrenceId != null) {
              recurrenceId = recurrenceId.recurrenceId;
            }
            tmp7(obj);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c5 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_4 = GuildScheduledEventsConstants.EXPLICIT_END_EVENT_SHEET_KEY;
let closure_5 = GuildEventModalConstants.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx");

export { openGuildEventDetails };
export function transitionToEventDetailsFromInvite() {
  return obj(...arguments);
}
export function openEndEventModal(channel) {
  obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(15813, dependencyMap.paths), closure_4, obj2);
}
