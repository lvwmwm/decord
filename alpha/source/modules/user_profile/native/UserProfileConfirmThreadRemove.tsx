// Module ID: 10258
// Function ID: 10259
// Name: UserProfileConfirmThreadRemove
// Dependencies: [19, 21, 4969, 5866, 1112, 5866, 2]
// Exports: default

// Module 10258 (UserProfileConfirmThreadRemove)
import intl5 from "intl" /* 1112 */;
import UserUtilsDefault from "UserUtils" /* 4969 */;
import AlertModal2 from "AlertModal" /* 5866 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmThreadRemove.tsx");

export default function UserProfileConfirmThreadRemove(isForumPost) {
  let AlertActions;
  let formatToPlainString;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let onConfirm;
  let t2;
  let user;
  isForumPost = isForumPost.isForumPost;
  ({ user, onConfirm } = isForumPost);
  const obj = UserUtilsDefault;
  const name = obj.useName(user);
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl5.intl;
  const string = intl.string;
  const t = intl5.t;
  const obj2 = { title: string(isForumPost ? t["8sKSjm"] : t.ZPm8jN), content: formatToPlainString(isForumPost ? t2["6UGfnx"] : t2["hL+Znb"], { user: name }), actions: React3(AlertActions, obj3) };
  const intl2 = tmp4(1112).intl;
  formatToPlainString = intl2.formatToPlainString;
  t2 = tmp4(1112).t;
  obj3 = { children: items };
  AlertActions = tmp4(5866).AlertActions;
  const obj4 = { variant: "destructive", text: intl3.string(intl5.t.N86XcP), onPress: onConfirm };
  const AlertActionButton = tmp4(5866).AlertActionButton;
  intl3 = tmp4(1112).intl;
  items = [_false(AlertActionButton, obj4, "remove-user-from-thread"), ];
  const obj5 = { variant: "secondary", text: intl4.string(intl5.t.yNbnce) };
  const AlertActionButton2 = tmp4(5866).AlertActionButton;
  intl4 = tmp4(1112).intl;
  items[1] = _false(AlertActionButton2, obj5, "cancel-remove-user-from-thread");
  return _false(AlertModal, obj2);
};
