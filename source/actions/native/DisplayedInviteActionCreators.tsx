// Module ID: 9379
// Function ID: 9380
// Name: showInvite
// Dependencies: [9115, 709, 7799, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 9379 (showInvite)
const result = require("generateAcceptInviteOptions").fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(code, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  ({ deeplinkAttemptId, location: _location } = obj);
  require(9115) /* getDisplayedInviteCode */;
  obj = { type: "DISPLAYED_INVITE_SHOW", code, username, deeplinkAttemptId };
  importDefault(709).dispatch(obj);
  const obj2 = importDefault(709);
  const invite = importDefault(7799).resolveInvite(code, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  importDefault(709).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};
