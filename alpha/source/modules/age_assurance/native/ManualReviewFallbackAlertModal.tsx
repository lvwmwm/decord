// Module ID: 8157
// Function ID: 8158
// Name: ManualReviewFallbackAlertModal
// Dependencies: [19, 21, 558, 576, 1125, 3188, 5952, 5952, 8158, 1272, 2]

// Module 8157 (ManualReviewFallbackAlertModal)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1125 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import _modDef3188 from "module_3188" /* 3188 */;
import AlertModal2 from "AlertModal" /* 5952 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8158 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewFallbackAlertModal() {
  let AlertActions;
  let intl3;
  let intl4;
  let items;
  let obj4;
  let obj6;
  let obj7;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef3188["+c5sxg"]);
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(_modDef3188["RFLH++"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { text: intl3.string(intl5.t["NX+WJN"]) };
    const AlertActionButton = tmp(5952).AlertActionButton;
    intl3 = tmp(1125).intl;
    const tmp11 = _false(AlertActionButton, obj2, "got-it");
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: tmp4, content: tmp5, actions: React3(AlertActions, obj4), trackingProps: obj6 };
    const AlertModal = tmp(5952).AlertModal;
    obj4 = { children: items };
    items = [tmp9, ];
    AlertActions = tmp(5952).AlertActions;
    const obj5 = {
      variant: "secondary",
      text: intl4.string(_modDef3188.Z61nkt),
      onPress() {
          const obj = ManualReviewActionCreators;
          return obj.handleManualReviewCta();
        }
    };
    const AlertActionButton2 = tmp(5952).AlertActionButton;
    intl4 = tmp(1125).intl;
    items[1] = _false(AlertActionButton2, obj5, "request-manual-review");
    obj6 = { impression: obj7 };
    obj7 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_FALLBACK };
    const tmp16 = _false(AlertModal, obj3);
    cResult[3] = tmp16;
    tmp12 = tmp16;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (function ManualReviewFallbackAlertModal() {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj5;
  let obj = { title: intl.string(_modDef3188["+c5sxg"]), content: intl2.string(_modDef3188["RFLH++"]), actions: React3(AlertActions, obj2), trackingProps: obj5 };
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
    text: intl4.string(_modDef3188.Z61nkt),
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
});
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default tmp4;
