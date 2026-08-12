// Module ID: 12037
// Function ID: 12038
// Name: confirmCancelFriendRequest
// Dependencies: [19, 21, 4684, 12038, 12039, 12040, 12041, 12042, 12043, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 12037 (confirmCancelFriendRequest)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = require(4684) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(importDefault(12038), {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = require(4684) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(importDefault(12039), {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = require(4684) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(importDefault(12040), {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = require(4684) /* useAlertStore */;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(importDefault(12041), { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  require(4684) /* useAlertStore */.openAlert("user-reported", jsx(importDefault(12042), {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = require(4684) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(importDefault(12043), {}));
};
