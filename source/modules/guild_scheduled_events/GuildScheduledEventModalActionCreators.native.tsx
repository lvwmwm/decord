// Module ID: 8342
// Function ID: 66444
// Name: openGuildEventDetails
// Dependencies: []
// Exports: openEndEventModal, transitionToEventDetailsFromInvite

// Module 8342 (openGuildEventDetails)
function openGuildEventDetails(arg0) {
  let event;
  let eventId;
  let onClose;
  let recurrenceId;
  ({ event, recurrenceId } = arg0);
  ({ eventId, onClose } = arg0);
  let obj = importDefault(dependencyMap[3]);
  obj = { eventId, event, onCloseActionSheet: onClose };
  if (null == recurrenceId) {
    recurrenceId = arg1(dependencyMap[6]).getNextRecurrenceIdInEvent(event);
    const obj3 = arg1(dependencyMap[6]);
  }
  let tmp5;
  if (null != recurrenceId) {
    tmp5 = recurrenceId;
  }
  obj.recurrenceId = tmp5;
  obj.openLazy(arg1(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), closure_5, obj, "stack");
}
function _transitionToEventDetailsFromInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _transitionToEventDetailsFromInvite = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).EXPLICIT_END_EVENT_SHEET_KEY;
let closure_5 = arg1(dependencyMap[2]).GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx");

export { openGuildEventDetails };
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return _transitionToEventDetailsFromInvite(...arguments);
};
export const openEndEventModal = function openEndEventModal(channel) {
  let obj = importDefault(dependencyMap[3]);
  obj = { channel };
  obj.openLazy(arg1(dependencyMap[5])(dependencyMap[7], dependencyMap.paths), closure_4, obj);
};
