// Module ID: 8162
// Function ID: 8163
// Name: ManualReviewPendingAlertModal
// Dependencies: [19, 21, 5959, 1114, 3189, 5959, 1261, 2]
// Exports: default

// Module 8162 (ManualReviewPendingAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import _modDef3189 from "module_3189" /* 3189 */;
import AlertModal2 from "AlertModal" /* 5959 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewPendingAlertModal.tsx");

export default function ManualReviewPendingAlertModal() {
  let intl3;
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  const obj4 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_PENDING } };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_PENDING });
  return <AlertModal title={intl.string(_modDef3189.CNm4w6)} content={intl2.string(_modDef3189["14Fje3"])} actions={null} trackingProps={obj4} />;
};
