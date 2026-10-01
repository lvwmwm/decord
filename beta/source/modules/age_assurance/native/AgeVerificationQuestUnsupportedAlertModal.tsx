// Module ID: 7877
// Function ID: 7878
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 5209, 1115, 3039, 5209, 2]
// Exports: default

// Module 7877 (AgeVerificationQuestUnsupportedAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import _modDef3039 from "module_3039" /* 3039 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal title={intl.string(_modDef3039.gUqXQN)} content={intl2.string(_modDef3039.yBHwMy)} actions={null} />;
};
