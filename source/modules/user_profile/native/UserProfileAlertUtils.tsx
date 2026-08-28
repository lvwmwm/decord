// Module ID: 9010
// Function ID: 9011
// Name: confirmCancelFriendRequest
// Dependencies: [19, 21, 4824, 9011, 9012, 9013, 9020, 9021, 9022, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 9010 (confirmCancelFriendRequest)
import noopAll from "noop" /* 19 */;
import useAlertStore from "useAlertStore" /* 4824 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 9011 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 9012 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 9013 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 9020 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 9021 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 9022 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(UserProfileConfirmCancelFriendRequestDefault, {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(UserProfileConfirmRemoveFriendDefault, {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(UserProfileConfirmRemoveGameFriendDefault, {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = useAlertStore;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnectionDefault, { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  useAlertStore.openAlert("user-reported", jsx(UserProfileAlertUserReportedDefault, {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(UserProfileConfirmThreadRemoveDefault, {}));
};
