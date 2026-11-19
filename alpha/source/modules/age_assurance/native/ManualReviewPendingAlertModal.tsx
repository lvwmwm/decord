// Module ID: 7872
// Function ID: 7873
// Name: ManualReviewPendingAlertModal
// Dependencies: [19, 21, 5745, 1113, 3439, 5745, 1264, 2]
// Exports: default

// Module 7872 (ManualReviewPendingAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import _modDef3439 from "module_3439" /* 3439 */;
import AlertModal2 from "AlertModal" /* 5745 */;
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
  return <AlertModal title={intl.string(_modDef3439.CNm4w6)} content={intl2.string(_modDef3439["14Fje3"])} actions={null} trackingProps={obj4} />;
};
