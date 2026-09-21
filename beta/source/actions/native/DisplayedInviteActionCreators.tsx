// Module ID: 9016
// Function ID: 9017
// Name: DisplayedInviteActionCreators
// Dependencies: [9017, 577, 8654, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9016 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8654 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9017 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  DisplayedInviteStore;
  DispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId });
  const obj3 = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  const invite = InstantInviteActionCreatorsDefault.resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  DispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};
