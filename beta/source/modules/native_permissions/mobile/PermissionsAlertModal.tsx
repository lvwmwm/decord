// Module ID: 5461
// Function ID: 5462
// Name: PermissionsAlertModal
// Dependencies: [19, 21, 5209, 5209, 1115, 2]
// Exports: default

// Module 5461 (PermissionsAlertModal)
import intl3 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const result = size.fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default function PermissionsAlertModal(arg0) {
  let AlertActions;
  let body;
  let intl;
  let intl2;
  let items;
  let obj2;
  let onConfirm;
  let title;
  ({ title, body, onConfirm } = arg0);
  const obj = { title, content: body, actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { onPress: onConfirm, text: intl.string(intl3.t.jVcuVY) };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl = intl3.intl;
  items = [React2(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl2.string(intl3.t.cpT0Cq) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl2 = intl3.intl;
  items[1] = React2(AlertActionButton2, obj4, "close");
  return React2(AlertModal, obj);
};
