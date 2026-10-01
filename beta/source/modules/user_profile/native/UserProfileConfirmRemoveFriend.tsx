// Module ID: 12119
// Function ID: 12120
// Name: UserProfileConfirmRemoveFriend
// Dependencies: [19, 21, 5209, 1115, 5209, 2]
// Exports: default

// Module 12119 (UserProfileConfirmRemoveFriend)
import intl5 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveFriend.tsx");

export default function UserProfileConfirmRemoveFriend(userDisplayName) {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  userDisplayName = userDisplayName.userDisplayName;
  const onConfirm = userDisplayName.onConfirm;
  const obj = { title: intl.formatToPlainString(intl5.t.fPLvZd, { name: userDisplayName }), content: intl2.formatToPlainString(intl5.t.l5FFq6, { name: userDisplayName }), actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "destructive", text: intl3.string(intl5.t.cvSt1J), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "confirm-remove"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["eN6+rI"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "nevermind");
  return React2(AlertModal, obj);
};
