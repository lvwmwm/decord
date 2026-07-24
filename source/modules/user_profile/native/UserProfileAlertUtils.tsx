// Module ID: 11680
// Function ID: 90656
// Name: confirmCancelFriendRequest
// Dependencies: [31, 33, 4472, 11681, 11682, 11683, 11684, 11685, 11686, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 11680 (confirmCancelFriendRequest)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = require(4472) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(importDefault(11681), {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = require(4472) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(importDefault(11682), {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = require(4472) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(importDefault(11683), {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = require(4472) /* useAlertStore */;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(importDefault(11684), { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  require(4472) /* useAlertStore */.openAlert("user-reported", jsx(importDefault(11685), {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = require(4472) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(importDefault(11686), {}));
};
