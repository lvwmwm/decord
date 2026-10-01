// Module ID: 11183
// Function ID: 11184
// Name: ForwardStaffToNonStaffWarningModal
// Dependencies: [21, 5209, 1115, 2]
// Exports: default

// Module 11183 (ForwardStaffToNonStaffWarningModal)
import intl5 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ jsx: c2, Fragment: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default function ForwardStaffToNonStaffWarningModal(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let onBack;
  let onConfirm;
  ({ onConfirm, onBack } = arg0);
  const obj = { title: intl.string(intl5.t.YrV3I9), content: intl2.string(intl5.t.MXSMtl), actions: React3(_false, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  const obj3 = { text: intl3.string(intl5.t.X7eUJq), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["13/7kX"]), onPress: onBack };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "back");
  return React2(AlertModal, obj);
};
