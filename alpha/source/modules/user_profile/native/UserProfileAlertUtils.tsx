// Module ID: 13304
// Function ID: 13305
// Name: UserProfileAlertUtils
// Dependencies: [19, 21, 5401, 13305, 13306, 13307, 13308, 13309, 13310, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 13304 (UserProfileAlertUtils)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5401 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 13305 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 13306 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 13307 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 13308 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 13309 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 13310 */;
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
