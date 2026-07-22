// Module ID: 8645
// Function ID: 68435
// Name: showInvite
// Dependencies: []
// Exports: clearDisplayedInvite, showInvite

// Module 8645 (showInvite)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("actions/native/DisplayedInviteActionCreators.tsx");

export const showInvite = function showInvite(inviteCode, username, arg2) {
  let _location;
  let deeplinkAttemptId;
  let fromDeeplink;
  let obj = arg2;
  if (null == arg2) {
    obj = {};
  }
  ({ deeplinkAttemptId, fromDeeplink, location: _location } = obj);
  require(dependencyMap[0]);
  obj = { type: "DISPLAYED_INVITE_SHOW", code: inviteCode, username, deeplinkAttemptId, fromDeeplink };
  importDefault(dependencyMap[1]).dispatch(obj);
  const obj2 = importDefault(dependencyMap[1]);
  const invite = importDefault(dependencyMap[2]).resolveInvite(inviteCode, _location);
};
export const clearDisplayedInvite = function clearDisplayedInvite() {
  importDefault(dependencyMap[1]).dispatch({ type: "DISPLAYED_INVITE_CLEAR" });
};
