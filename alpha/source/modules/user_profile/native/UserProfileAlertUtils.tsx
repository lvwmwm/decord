// Module ID: 12568
// Function ID: 12569
// Name: UserProfileAlertUtils
// Dependencies: [19, 21, 6095, 12569, 12570, 12571, 12572, 12573, 12574, 12575, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmRemoveWidget, confirmThreadRemove, confirmVideoUnstableConnection

// Module 12568 (UserProfileAlertUtils)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 6095 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 12569 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 12570 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 12571 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 12572 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 12573 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 12574 */;
import UserProfileConfirmRemoveWidgetDefault from "UserProfileConfirmRemoveWidget" /* 12575 */;
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
export function confirmRemoveWidget(arg0) {
  let closure_129_0;
  let closure_129_1;
  ({ onConfirm: closure_129_0, onDismissWithoutRemoving: closure_129_1 } = arg0);
  let c2 = false;
  const merged = Object.assign(arg0, Object.assign({ onConfirm: 0, onDismissWithoutRemoving: 0 }));
  const tmp2 = useAlertStore;
  const openAlert = tmp2.openAlert;
  UserProfileConfirmRemoveWidgetDefault;
  const merged1 = Object.assign(merged);
  openAlert("remove-widget", <tmp3 onConfirm={function onConfirm() {
    c2 = true;
    closure_1_0();
  }} />, () => {
    const tmp = c2;
    if (!tmp) {
      if (closure_1_1 != null) {
        tmp2();
      }
    }
  });
}
