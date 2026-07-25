// Module ID: 8155
// Function ID: 65395
// Name: openGuildEventDetails
// Dependencies: [5, 1354, 8156, 4099, 8157, 1935, 8148, 12211, 2]
// Exports: openEndEventModal, transitionToEventDetailsFromInvite

// Module 8155 (openGuildEventDetails)
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
  let obj = importDefault(4099);
  obj = { eventId, event, onCloseActionSheet: onClose };
  if (null == recurrenceId) {
    recurrenceId = require(8148) /* getNextBucketedTime */.getNextRecurrenceIdInEvent(event);
    const obj3 = require(8148) /* getNextBucketedTime */;
  }
  let tmp5;
  if (null != recurrenceId) {
    tmp5 = recurrenceId;
  }
  obj.recurrenceId = tmp5;
  obj.openLazy(require(1935) /* maybeLoadBundle */(8157, dependencyMap.paths), closure_5, obj, "stack");
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
  let obj = importDefault(4099);
  obj = { channel };
  obj.openLazy(require(1935) /* maybeLoadBundle */(12211, dependencyMap.paths), closure_4, obj);
};
