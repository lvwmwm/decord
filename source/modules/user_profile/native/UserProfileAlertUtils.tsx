// Module ID: 11895
// Function ID: 11896
// Name: confirmCancelFriendRequest
// Dependencies: [19, 21, 4625, 11896, 11897, 11898, 11899, 11900, 11901, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 11895 (confirmCancelFriendRequest)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useAlertStore").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(importDefault(11896), {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(importDefault(11897), {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(importDefault(11898), {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = require(4625) /* useAlertStore */;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(importDefault(11899), { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  require(4625) /* useAlertStore */.openAlert("user-reported", jsx(importDefault(11900), {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = require(4625) /* useAlertStore */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(importDefault(11901), {}));
};
