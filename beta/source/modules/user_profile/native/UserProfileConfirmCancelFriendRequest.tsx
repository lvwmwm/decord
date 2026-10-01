// Module ID: 12118
// Function ID: 12119
// Name: UserProfileConfirmCancelFriendRequest
// Dependencies: [19, 21, 5209, 1115, 5209, 2]
// Exports: default

// Module 12118 (UserProfileConfirmCancelFriendRequest)
import intl5 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmCancelFriendRequest.tsx");

export default function UserProfileConfirmCancelFriendRequest(arg0) {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let onConfirm;
  let userDisplayName;
  ({ userDisplayName, onConfirm } = arg0);
  const obj = { title: intl.string(intl5.t["bTfA//"]), content: intl2.formatToPlainString(intl5.t["72FwjH"], { name: userDisplayName }), actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "destructive", text: intl3.string(intl5.t["bTfA//"]), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "cancel-friend-request"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["eN6+rI"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "nevermind");
  return React2(AlertModal, obj);
};
