// Module ID: 9597
// Function ID: 9598
// Name: DisplayedInviteActionCreators
// Dependencies: [9275, 572, 9097, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9597 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 9097 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9275 */;
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
