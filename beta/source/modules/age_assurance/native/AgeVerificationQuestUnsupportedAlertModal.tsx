// Module ID: 7990
// Function ID: 7991
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 5964, 1113, 3096, 5964, 1260, 2]
// Exports: default

// Module 7990 (AgeVerificationQuestUnsupportedAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import _modDef3096 from "module_3096" /* 3096 */;
import AlertModal2 from "AlertModal" /* 5964 */;
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
  const obj4 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_QUEST_UNSUPPORTED } };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_QUEST_UNSUPPORTED });
  return <AlertModal title={intl.string(_modDef3096.gUqXQN)} content={intl2.string(_modDef3096.yBHwMy)} actions={null} trackingProps={obj4} />;
};
