// Module ID: 13204
// Function ID: 13205
// Name: UserProfileAlertUtils
// Dependencies: [19, 21, 5361, 13205, 13206, 13207, 13208, 13209, 13210, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 13204 (UserProfileAlertUtils)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5361 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 13205 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 13206 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 13207 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 13208 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 13209 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 13210 */;
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
