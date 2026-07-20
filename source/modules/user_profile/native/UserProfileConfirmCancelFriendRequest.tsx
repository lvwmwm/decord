// Module ID: 11636
// Function ID: 90328
// Name: UserProfileConfirmCancelFriendRequest
// Dependencies: []
// Exports: default

// Module 11636 (UserProfileConfirmCancelFriendRequest)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default function UserProfileConfirmCancelFriendRequest(arg0) {
  let onConfirm;
  let userDisplayName;
  ({ userDisplayName, onConfirm } = arg0);
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.bTfA//);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.content = intl2.formatToPlainString(arg1(dependencyMap[3]).t.72FwjH, { name: userDisplayName });
  obj = {};
  obj = { variant: "destructive" };
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.text = intl3.string(arg1(dependencyMap[3]).t.bTfA//);
  obj.onPress = onConfirm;
  const items = [callback(arg1(dependencyMap[2]).AlertActionButton, obj, "cancel-friend-request"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[3]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[3]).t.eN6+rI);
  items[1] = callback(arg1(dependencyMap[2]).AlertActionButton, obj1, "nevermind");
  obj.children = items;
  obj.actions = callback2(arg1(dependencyMap[4]).AlertActions, obj);
  return callback(arg1(dependencyMap[2]).AlertModal, obj);
};
