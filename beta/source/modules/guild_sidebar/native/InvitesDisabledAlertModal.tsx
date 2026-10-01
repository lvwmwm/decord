// Module ID: 11781
// Function ID: 11782
// Name: InvitesDisabledAlertModal
// Dependencies: [19, 21, 5209, 1115, 5209, 2]
// Exports: default

// Module 11781 (InvitesDisabledAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default function InvitesDisabledAlertModal() {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t.BddRzS) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(intl4.t.LpUfEt)} content={intl2.string(intl4.t.QRXqzO)} actions={null} />;
};
