// Module ID: 12574
// Function ID: 12575
// Name: UserProfileConfirmRemoveWidget
// Dependencies: [19, 21, 6098, 1113, 6098, 2]
// Exports: default

// Module 12574 (UserProfileConfirmRemoveWidget)
import intl5 from "intl" /* 1113 */;
import AlertModal2 from "AlertModal" /* 6098 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveWidget.tsx");

export default function UserProfileConfirmRemoveWidget(arg0) {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let onConfirm;
  let widgetName;
  ({ widgetName, onConfirm } = arg0);
  const obj = { title: intl.string(intl5.t.Mm07Yc), content: intl2.formatToPlainString(intl5.t.LbaJ5u, { widgetName }), actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "destructive", text: intl3.string(intl5.t.Mm07Yc), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "remove-widget"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["ETE/oC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "cancel-remove-widget");
  return React2(AlertModal, obj);
};
