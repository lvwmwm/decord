// Module ID: 9050
// Function ID: 9051
// Name: DisplayedInviteActionCreators
// Dependencies: [9051, 573, 8681, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9050 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8681 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9051 */;
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
