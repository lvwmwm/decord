// Module ID: 9548
// Function ID: 9549
// Name: showInvite
// Dependencies: [9285, 709, 7970, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9548 (showInvite)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 7970 */;
import getDisplayedInviteCode from "getDisplayedInviteCode" /* 9285 */;

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
