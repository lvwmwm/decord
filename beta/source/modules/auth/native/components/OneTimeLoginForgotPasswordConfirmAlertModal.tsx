// Module ID: 6366
// Function ID: 6367
// Name: OneTimeLoginForgotPasswordConfirmAlertModal
// Dependencies: [19, 21, 5209, 1115, 5209, 2]
// Exports: default

// Module 6366 (OneTimeLoginForgotPasswordConfirmAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/native/components/OneTimeLoginForgotPasswordConfirmAlertModal.tsx");

export default function OneTimeLoginForgotPasswordConfirmAlertModal() {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t.BddRzS) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(intl4.t["6Ecyts"])} content={intl2.string(intl4.t.iAcrqV)} actions={null} />;
};
