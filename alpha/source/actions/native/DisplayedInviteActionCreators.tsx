// Module ID: 9591
// Function ID: 9592
// Name: DisplayedInviteActionCreators
// Dependencies: [9268, 572, 9091, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9591 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 9091 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9268 */;
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
