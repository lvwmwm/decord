// Module ID: 14143
// Function ID: 14144
// Name: UserProfileAlertUtils
// Dependencies: [19, 21, 5955, 14144, 14145, 14146, 14147, 14148, 14149, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 14143 (UserProfileAlertUtils)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 14144 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 14145 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 14146 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 14147 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 14148 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 14149 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export function confirmCancelFriendRequest(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmCancelFriendRequestDefault;
  const merged = Object.assign(arg0);
  openAlert("cancel-friend-request", <tmp2 />);
}
export function confirmRemoveFriend(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmRemoveFriendDefault;
  const merged = Object.assign(arg0);
  openAlert("remove-friend", <tmp2 />);
}
export function confirmRemoveGameFriend(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmRemoveGameFriendDefault;
  const merged = Object.assign(arg0);
  openAlert("remove-game-friend", <tmp2 />);
}
export function confirmVideoUnstableConnection(onConfirm) {
  const obj = useAlertStore;
  obj.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnectionDefault, { onConfirm }));
}
export function alertUserReported() {
  const obj = useAlertStore;
  obj.openAlert("user-reported", jsx(UserProfileAlertUserReportedDefault, {}));
}
export function confirmThreadRemove(arg0) {
  const openAlert = useAlertStore.openAlert;
  useAlertStore;
  UserProfileConfirmThreadRemoveDefault;
  const merged = Object.assign(arg0);
  openAlert("thread-remove", <tmp2 />);
}
