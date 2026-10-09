// Module ID: 12317
// Function ID: 12318
// Name: UserProfileAlertUtils
// Dependencies: [19, 21, 5300, 12318, 12319, 12320, 12321, 12322, 12323, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 12317 (UserProfileAlertUtils)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5300 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 12318 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 12319 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 12320 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 12321 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 12322 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 12323 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmCancelFriendRequestDefault;
  const merged = Object.assign(arg0);
  openAlert("cancel-friend-request", <tmp2 />);
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmRemoveFriendDefault;
  const merged = Object.assign(arg0);
  openAlert("remove-friend", <tmp2 />);
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmRemoveGameFriendDefault;
  const merged = Object.assign(arg0);
  openAlert("remove-game-friend", <tmp2 />);
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  const obj = useAlertStore;
  obj.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnectionDefault, { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  const obj = useAlertStore;
  obj.openAlert("user-reported", jsx(UserProfileAlertUserReportedDefault, {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmThreadRemoveDefault;
  const merged = Object.assign(arg0);
  openAlert("thread-remove", <tmp2 />);
};
