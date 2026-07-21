// Module ID: 11642
// Function ID: 90344
// Name: confirmCancelFriendRequest
// Dependencies: []
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 11642 (confirmCancelFriendRequest)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = arg1(dependencyMap[2]);
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(importDefault(dependencyMap[3]), obj));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = arg1(dependencyMap[2]);
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(importDefault(dependencyMap[4]), obj));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = arg1(dependencyMap[2]);
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(importDefault(dependencyMap[5]), obj));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = arg1(dependencyMap[2]);
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(importDefault(dependencyMap[6]), obj));
};
export const alertUserReported = function alertUserReported() {
  arg1(dependencyMap[2]).openAlert("user-reported", jsx(importDefault(dependencyMap[7]), {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = arg1(dependencyMap[2]);
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(importDefault(dependencyMap[8]), obj));
};
