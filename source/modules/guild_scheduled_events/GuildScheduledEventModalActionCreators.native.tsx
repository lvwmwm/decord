// Module ID: 8193
// Function ID: 65506
// Name: openGuildEventDetails
// Dependencies: [5, 1354, 8194, 4133, 8195, 1935, 8186, 12255, 2]
// Exports: openEndEventModal, transitionToEventDetailsFromInvite

// Module 8193 (openGuildEventDetails)
import maybeLoadBundle from "maybeLoadBundle";
import { EXPLICIT_END_EVENT_SHEET_KEY as closure_4 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { GUILD_EVENT_INFO_ACTION_SHEET_KEY as closure_5 } from "CREATE_GUILD_EVENT_MODAL_KEY";

const require = arg1;
function openGuildEventDetails(arg0) {
  let event;
  let eventId;
  let onClose;
  let recurrenceId;
  ({ event, recurrenceId } = arg0);
  ({ eventId, onClose } = arg0);
  let obj = importDefault(4133);
  obj = { eventId, event, onCloseActionSheet: onClose };
  if (null == recurrenceId) {
    recurrenceId = require(8186) /* getNextBucketedTime */.getNextRecurrenceIdInEvent(event);
    const obj3 = require(8186) /* getNextBucketedTime */;
  }
  let tmp5;
  if (null != recurrenceId) {
    tmp5 = recurrenceId;
  }
  obj.recurrenceId = tmp5;
  obj.openLazy(require(1935) /* maybeLoadBundle */(8195, dependencyMap.paths), closure_5, obj, "stack");
}
async function _transitionToEventDetailsFromInvite(arg0, arg1, arg2) {
  yield Promise.resolve();
  const obj = { eventId: arg0.id, event: arg0 };
  let recurrenceId;
  if (null != arg1) {
    recurrenceId = arg1.recurrenceId;
  }
  obj.recurrenceId = recurrenceId;
  outer2_6(obj);
}
const result = require("CREATE_GUILD_EVENT_MODAL_KEY").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx");

export { openGuildEventDetails };
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return _transitionToEventDetailsFromInvite(...arguments);
};
export const openEndEventModal = function openEndEventModal(channel) {
  let obj = importDefault(4133);
  obj = { channel };
  obj.openLazy(require(1935) /* maybeLoadBundle */(12255, dependencyMap.paths), closure_4, obj);
};
