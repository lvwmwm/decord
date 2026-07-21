// Module ID: 11648
// Function ID: 90374
// Name: UserProfileConfirmThreadRemove
// Dependencies: []
// Exports: default

// Module 11648 (UserProfileConfirmThreadRemove)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default function UserProfileConfirmThreadRemove(isForumPost) {
  let onConfirm;
  let user;
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  let obj = importDefault(dependencyMap[2]);
  const name = obj.useName(user);
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  const t = arg1(dependencyMap[4]).t;
  obj.title = intl.string(isForumPost ? t.8sKSjm : t.ZPm8jN);
  const intl2 = arg1(dependencyMap[4]).intl;
  const t2 = arg1(dependencyMap[4]).t;
  obj.content = intl2.formatToPlainString(isForumPost ? t2.6UGfnx : t2.hL+Znb, { user: name });
  obj = {};
  const obj1 = { variant: "destructive" };
  const intl3 = arg1(dependencyMap[4]).intl;
  obj1.text = intl3.string(arg1(dependencyMap[4]).t.N86XcP);
  obj1.onPress = onConfirm;
  const items = [callback(arg1(dependencyMap[3]).AlertActionButton, obj1, "remove-user-from-thread"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[4]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[4]).t.yNbnce);
  items[1] = callback(arg1(dependencyMap[3]).AlertActionButton, obj2, "cancel-remove-user-from-thread");
  obj.children = items;
  obj.actions = callback2(arg1(dependencyMap[5]).AlertActions, obj);
  return callback(arg1(dependencyMap[3]).AlertModal, obj);
};
