// Module ID: 9339
// Function ID: 9340
// Name: showInvite
// Dependencies: [9076, 709, 7760, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9339 (showInvite)
const result = require("generateAcceptInviteOptions").fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  require(9076) /* getDisplayedInviteCode */;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  importDefault(709).dispatch(obj);
  const obj2 = importDefault(709);
  const invite = importDefault(7760).resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  importDefault(709).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};
