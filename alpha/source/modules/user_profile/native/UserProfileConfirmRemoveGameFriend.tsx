// Module ID: 14146
// Function ID: 14147
// Name: UserProfileConfirmRemoveGameFriend
// Dependencies: [19, 21, 8754, 10720, 5959, 1114, 5959, 2]
// Exports: default

// Module 14146 (UserProfileConfirmRemoveGameFriend)
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8754 */;
import PeopleUtilsDefault from "PeopleUtils" /* 10720 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx");

export default function UserProfileConfirmRemoveGameFriend(applicationId) {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let obj2;
  let userDisplayName;
  let userId;
  ({ userDisplayName, userId } = applicationId);
  applicationId = applicationId.applicationId;
  const items = [applicationId, userId];
  const gameName = applicationId.gameName;
  const callback = react.useCallback(() => {
    const obj = UserProfileAnalyticsUtils;
    const result = obj.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
    const obj2 = PeopleUtilsDefault;
    const obj3 = { userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" };
    obj2.removeFriend(obj3);
  }, items);
  let obj = { title: intl.formatToPlainString(userId(1114).t.fBKKfq, { name: userDisplayName }), content: intl2.formatToPlainString(userId(1114).t.dsU5bl, { name: userDisplayName, gameName }), actions: closure_5(AlertActions, obj2) };
  const AlertModal = userId(5959).AlertModal;
  intl = userId(1114).intl;
  intl2 = userId(1114).intl;
  obj2 = { children: items1 };
  AlertActions = userId(5959).AlertActions;
  let obj3 = { variant: "destructive", text: intl3.string(userId(1114).t.RLcE6x), onPress: callback };
  const AlertActionButton = userId(5959).AlertActionButton;
  intl3 = userId(1114).intl;
  items1 = [closure_4(AlertActionButton, obj3, "confirm-remove"), ];
  const obj4 = { variant: "secondary", text: intl4.string(userId(1114).t["eN6+rI"]) };
  const AlertActionButton2 = userId(5959).AlertActionButton;
  intl4 = userId(1114).intl;
  items1[1] = closure_4(AlertActionButton2, obj4, "nevermind");
  return closure_4(AlertModal, obj);
};
