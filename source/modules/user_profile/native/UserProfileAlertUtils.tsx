// Module ID: 12058
// Function ID: 12059
// Name: confirmCancelFriendRequest
// Dependencies: [19, 21, 4707, 12059, 12060, 12061, 12062, 12063, 12064, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 12058 (confirmCancelFriendRequest)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = require(4707) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(importDefault(12059), {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = require(4707) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(importDefault(12060), {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = require(4707) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(importDefault(12061), {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = require(4707) /* useAlertStore */;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(importDefault(12062), { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  require(4707) /* useAlertStore */.openAlert("user-reported", jsx(importDefault(12063), {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = require(4707) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(importDefault(12064), {}));
};
