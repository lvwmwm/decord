// Module ID: 8171
// Function ID: 8172
// Name: ManualReviewFallbackAlertModal
// Dependencies: [19, 21, 5964, 1113, 3192, 5964, 8172, 1260, 2]
// Exports: default

// Module 8171 (ManualReviewFallbackAlertModal)
import intl5 from "intl" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import _modDef3192 from "module_3192" /* 3192 */;
import AlertModal2 from "AlertModal" /* 5964 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8172 */;
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
  let obj5;
  let obj = { title: intl.string(_modDef3192["+c5sxg"]), content: intl2.string(_modDef3192["RFLH++"]), actions: React3(AlertActions, obj2), trackingProps: obj5 };
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
    text: intl4.string(_modDef3192.Z61nkt),
    onPress() {
      const obj = ManualReviewActionCreators;
      return obj.handleManualReviewCta();
    }
  };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = _false(AlertActionButton2, obj4, "request-manual-review");
  obj5 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_FALLBACK } };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_FALLBACK });
  return _false(AlertModal, obj);
};
