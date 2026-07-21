// Module ID: 11645
// Function ID: 90367
// Name: UserProfileConfirmRemoveGameFriend
// Dependencies: []
// Exports: default

// Module 11645 (UserProfileConfirmRemoveGameFriend)
let closure_3 = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx");

export default function UserProfileConfirmRemoveGameFriend(gameName) {
  let userDisplayName;
  let userId;
  ({ userDisplayName, userId } = gameName);
  const arg1 = userId;
  const applicationId = gameName.applicationId;
  const importDefault = applicationId;
  const items = [applicationId, userId];
  const callback = React.useCallback(() => {
    let obj = userId(closure_2[2]);
    const result = obj.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
    obj = { userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" };
    applicationId(closure_2[3]).removeFriend(obj);
  }, items);
  let obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.title = intl.formatToPlainString(arg1(dependencyMap[5]).t.fBKKfq, { name: userDisplayName });
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.content = intl2.formatToPlainString(arg1(dependencyMap[5]).t.dsU5bl, { name: userDisplayName, gameName: gameName.gameName });
  obj = {};
  obj = { variant: "destructive" };
  const intl3 = arg1(dependencyMap[5]).intl;
  obj.text = intl3.string(arg1(dependencyMap[5]).t.RLcE6x);
  obj.onPress = callback;
  const items1 = [callback(arg1(dependencyMap[4]).AlertActionButton, obj, "confirm-remove"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[5]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[5]).t.eN6+rI);
  items1[1] = callback(arg1(dependencyMap[4]).AlertActionButton, obj1, "nevermind");
  obj.children = items1;
  obj.actions = callback2(arg1(dependencyMap[6]).AlertActions, obj);
  return callback(arg1(dependencyMap[4]).AlertModal, obj);
};
