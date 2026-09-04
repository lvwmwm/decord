// Module ID: 8668
// Function ID: 8669
// Name: showInvite
// Dependencies: [8669, 706, 8308, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 8668 (showInvite)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 8308 */;
import getDisplayedInviteCode from "getDisplayedInviteCode" /* 8669 */;

const result = set.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  getDisplayedInviteCode;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  dispatcherDefault.dispatch(obj);
  const obj2 = dispatcherDefault;
  const invite = generateAcceptInviteOptionsDefault.resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  dispatcherDefault.dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};
