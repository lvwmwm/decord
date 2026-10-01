// Module ID: 8046
// Function ID: 8047
// Name: ManualReviewFallbackAlertModal
// Dependencies: [19, 21, 5209, 1115, 3103, 5209, 8047, 2]
// Exports: default

// Module 8046 (ManualReviewFallbackAlertModal)
import intl5 from "intl" /* 1115 */;
import _modDef3103 from "module_3103" /* 3103 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8047 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default function ManualReviewFallbackAlertModal() {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj = { title: intl.string(_modDef3103["+c5sxg"]), content: intl2.string(_modDef3103["RFLH++"]), actions: React3(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { text: intl3.string(intl5.t["NX+WJN"]) };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [_false(AlertActionButton, obj3, "got-it"), ];
  const obj4 = {
    variant: "secondary",
    text: intl4.string(_modDef3103.Z61nkt),
    onPress() {
      const obj = ManualReviewActionCreators;
      return obj.handleManualReviewCta();
    }
  };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = _false(AlertActionButton2, obj4, "request-manual-review");
  return _false(AlertModal, obj);
};
