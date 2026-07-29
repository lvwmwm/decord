// Module ID: 11716
// Function ID: 11717
// Name: UserProfileConfirmRemoveGameFriend
// Dependencies: [19, 21, 8108, 9056, 4533, 1236, 4533, 2]
// Exports: default

// Module 11716 (UserProfileConfirmRemoveGameFriend)
import noop from "noop";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let result = require("getProfileProperties").fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx");

export default function UserProfileConfirmRemoveGameFriend(gameName) {
  let userDisplayName;
  let userId;
  ({ userDisplayName, userId } = gameName);
  const applicationId = gameName.applicationId;
  const items = [applicationId, userId];
  const callback = React.useCallback(() => {
    let obj = userId(outer1_2[2]);
    const result = obj.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
    obj = { userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" };
    applicationId(outer1_2[3]).removeFriend(obj);
  }, items);
  let obj = { title: null, content: null, actions: null };
  const intl = userId(1236).intl;
  obj[0] = intl.formatToPlainString(userId(1236).t.fBKKfq, { name: userDisplayName });
  const intl2 = userId(1236).intl;
  obj[1] = intl2.formatToPlainString(userId(1236).t.dsU5bl, { name: userDisplayName, gameName: gameName.gameName });
  obj = { children: null };
  obj = { variant: "destructive", text: null, onPress: null };
  const intl3 = userId(1236).intl;
  obj[1] = intl3.string(userId(1236).t.RLcE6x);
  obj[2] = callback;
  const items1 = [callback(userId(4533).AlertActionButton, obj, "confirm-remove"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl4 = userId(1236).intl;
  obj1[1] = intl4.string(userId(1236).t["eN6+rI"]);
  items1[1] = callback(userId(4533).AlertActionButton, obj1, "nevermind");
  obj[0] = items1;
  obj[2] = callback2(userId(4533).AlertActions, obj);
  return callback(userId(4533).AlertModal, obj);
};
