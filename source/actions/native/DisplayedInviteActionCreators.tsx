// Module ID: 8804
// Function ID: 8805
// Name: showInvite
// Dependencies: [8805, 709, 8595, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 8804 (showInvite)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 8595 */;
import getDisplayedInviteCode from "getDisplayedInviteCode" /* 8805 */;

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
