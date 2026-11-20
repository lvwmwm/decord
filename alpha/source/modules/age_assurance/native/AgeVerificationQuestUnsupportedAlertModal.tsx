// Module ID: 7710
// Function ID: 7711
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 5747, 1112, 3345, 5747, 1263, 2]
// Exports: default

// Module 7710 (AgeVerificationQuestUnsupportedAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1263 */;
import _modDef3345 from "module_3345" /* 3345 */;
import AlertModal2 from "AlertModal" /* 5747 */;
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
  return <AlertModal title={intl.string(_modDef3345.gUqXQN)} content={intl2.string(_modDef3345.yBHwMy)} actions={null} trackingProps={obj4} />;
};
