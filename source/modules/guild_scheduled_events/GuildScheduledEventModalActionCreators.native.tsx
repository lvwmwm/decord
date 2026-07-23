// Module ID: 8353
// Function ID: 66516
// Name: openGuildEventDetails
// Dependencies: [5, 1354, 8354, 4098, 8355, 1934, 8346, 12208, 2]
// Exports: openEndEventModal, transitionToEventDetailsFromInvite

// Module 8353 (openGuildEventDetails)
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
  let obj = importDefault(4098);
  obj = { eventId, event, onCloseActionSheet: onClose };
  if (null == recurrenceId) {
    recurrenceId = require(8346) /* getNextBucketedTime */.getNextRecurrenceIdInEvent(event);
    const obj3 = require(8346) /* getNextBucketedTime */;
  }
  let tmp5;
  if (null != recurrenceId) {
    tmp5 = recurrenceId;
  }
  obj.recurrenceId = tmp5;
  obj.openLazy(require(1934) /* maybeLoadBundle */(8355, dependencyMap.paths), closure_5, obj, "stack");
}
function _transitionToEventDetailsFromInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("CREATE_GUILD_EVENT_MODAL_KEY").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx");

export { openGuildEventDetails };
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return _transitionToEventDetailsFromInvite(...arguments);
};
export const openEndEventModal = function openEndEventModal(channel) {
  let obj = importDefault(4098);
  obj = { channel };
  obj.openLazy(require(1934) /* maybeLoadBundle */(12208, dependencyMap.paths), closure_4, obj);
};
