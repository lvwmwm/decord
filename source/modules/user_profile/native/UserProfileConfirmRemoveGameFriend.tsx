// Module ID: 11683
// Function ID: 90667
// Name: UserProfileConfirmRemoveGameFriend
// Dependencies: [31, 33, 8311, 9096, 4475, 1212, 4475, 2]
// Exports: default

// Module 11683 (UserProfileConfirmRemoveGameFriend)
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
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
  let obj = {};
  const intl = userId(1212).intl;
  obj.title = intl.formatToPlainString(userId(1212).t.fBKKfq, { name: userDisplayName });
  const intl2 = userId(1212).intl;
  obj.content = intl2.formatToPlainString(userId(1212).t.dsU5bl, { name: userDisplayName, gameName: gameName.gameName });
  obj = {};
  obj = { variant: "destructive" };
  const intl3 = userId(1212).intl;
  obj.text = intl3.string(userId(1212).t.RLcE6x);
  obj.onPress = callback;
  const items1 = [callback(userId(4475).AlertActionButton, obj, "confirm-remove"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = userId(1212).intl;
  obj1.text = intl4.string(userId(1212).t["eN6+rI"]);
  items1[1] = callback(userId(4475).AlertActionButton, obj1, "nevermind");
  obj.children = items1;
  obj.actions = callback2(userId(4475).AlertActions, obj);
  return callback(userId(4475).AlertModal, obj);
};
