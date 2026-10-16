// Module ID: 9184
// Function ID: 9185
// Name: DisplayedInviteActionCreators
// Dependencies: [8914, 584, 8724, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9184 (DisplayedInviteActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8724 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8914 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
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
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};
