// Module ID: 9023
// Function ID: 9024
// Name: DisplayedInviteActionCreators
// Dependencies: [9024, 573, 8653, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9023 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8653 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9024 */;
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
