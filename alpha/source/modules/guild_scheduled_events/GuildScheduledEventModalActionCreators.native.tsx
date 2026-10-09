// Module ID: 8497
// Function ID: 8498
// Name: GuildScheduledEventModalActionCreators
// Dependencies: [5, 2070, 8498, 5055, 8499, 2000, 8504, 8767, 2]
// Exports: openEndEventModal, transitionToEventDetailsFromInvite

// Module 8497 (GuildScheduledEventModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2070 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 8498 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3;

let tmp3;
const ScheduleUtils = tmp3(8504);
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
  const tmp4 = asyncRequire(8499, dependencyMap.paths);
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
          return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
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
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return obj(...arguments);
};
export const openEndEventModal = function openEndEventModal(channel) {
  obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(8767, dependencyMap.paths), closure_4, obj2);
};
