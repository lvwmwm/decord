// Module ID: 9781
// Function ID: 9782
// Name: DisplayedInviteActionCreators
// Dependencies: [7968, 572, 7173, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9781 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7173 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 7968 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export function showInvite(code, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  DisplayedInviteStore;
  const obj2 = DispatcherDefault;
  const obj3 = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  obj2.dispatch(obj3);
  const obj4 = InstantInviteActionCreatorsDefault;
  const invite = obj4.resolveInvite(code, _location);
}
export function clearDisplayedInvite() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
}
