// Module ID: 8652
// Function ID: 68475
// Name: showInvite
// Dependencies: [8486, 686, 7460, 2]
// Exports: clearDisplayedInvite, showInvite

// Module 8652 (showInvite)
const result = require("generateAcceptInviteOptions").fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(inviteCode, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let fromDeeplink;
  let obj = arg2;
  if (null == arg2) {
    obj = {};
  }
  ({ deeplinkAttemptId, fromDeeplink, location: _location } = obj);
  require(8486) /* _isNativeReflectConstruct */;
  obj = { type: "DISPLAYED_INVITE_SHOW", code: inviteCode, username, deeplinkAttemptId, fromDeeplink };
  importDefault(686).dispatch(obj);
  const obj2 = importDefault(686);
  const invite = importDefault(7460).resolveInvite(inviteCode, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  importDefault(686).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};
