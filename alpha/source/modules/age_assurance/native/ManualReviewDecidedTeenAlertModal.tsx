// Module ID: 8154
// Function ID: 8155
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 6715, 21, 558, 576, 8155, 5271, 7941, 2065, 1125, 3188, 5952, 5952, 1272, 2]

// Module 8154 (ManualReviewDecidedTeenAlertModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _modDef3188 from "module_3188" /* 3188 */;
import Text_Text from "Text/Text" /* 5271 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6715 */;
import ManualReviewInconclusiveCopyExperiment from "ManualReviewInconclusiveCopyExperiment" /* 8155 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const intl4 = tmp(1125);
const discord_common_AnalyticsUtils = tmp(1272);
const AlertModal2 = tmp(5952);
const FALLBACK_TEEN_AGE_RANGE = AgeVerificationConstants.FALLBACK_TEEN_AGE_RANGE;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  let first;
  let formatResult;
  let intl3;
  let obj6;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(9);
  teenAgeRange = teenAgeRange.teenAgeRange;
  const obj2 = ManualReviewInconclusiveCopyExperiment;
  const isManualReviewInconclusiveCopyEnabled = obj2.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function contentAndSettingsHook(children, arg1) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const openUrl = closure_1_1(closure_1_2[7]).openUrl;
          closure_1_1(closure_1_2[7]);
          const getArticleURL = closure_1_1(closure_1_2[8]).getArticleURL;
          closure_1_1(closure_1_2[8]);
          const intl = closure_1_0(closure_1_2[9]).intl;
          return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[10]).agiNYw)));
        },
        children
      }, arg1);
    }
    cResult[0] = contentAndSettingsHook;
    first = contentAndSettingsHook;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = intl4.intl;
    const stringResult = intl.string(_modDef3188.AA3xYb);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === isManualReviewInconclusiveCopyEnabled) {
    let tmp9;
    let tmp16;
    let tmp15;
    let tmp19;
    if (cResult[3] === teenAgeRange) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const AlertActions = AlertModal2.AlertActions;
      ({ text: intl3.string(intl4.t["NX+WJN"]) });
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl3 = intl4.intl;
      const tmp18 = <AlertActions>{null}</AlertActions>;
      const obj5 = { impression: obj6 };
      cResult[5] = tmp18;
      cResult[6] = obj5;
      tmp16 = obj5;
      tmp15 = tmp18;
      obj6 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN };
    } else {
      tmp15 = cResult[5];
      tmp16 = cResult[6];
    }
    if (cResult[7] !== tmp9) {
      const tmp21 = jsx(AlertModal2.AlertModal, { title: tmp6, content: tmp9, actions: tmp15, trackingProps: tmp16 });
      cResult[7] = tmp9;
      cResult[8] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[8];
    }
    return tmp19;
  }
  const intl2 = intl4.intl;
  const format = intl2.format;
  const tmp10 = _modDef3188;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj8 = { contentAndSettingsHook: first };
    formatResult = format(tmp10.UIbYzl, obj8);
  } else {
    let tmp13 = teenAgeRange;
    const prop = tmp10["2+f8w1"];
    if (teenAgeRange == null) {
      tmp13 = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj9 = { teenAgeRange: tmp13, contentAndSettingsHook: first };
    formatResult = format(prop, obj9);
  }
  cResult[2] = isManualReviewInconclusiveCopyEnabled;
  cResult[3] = teenAgeRange;
  cResult[4] = formatResult;
  tmp9 = formatResult;
}) : (function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  let formatResult;
  let intl3;
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, arg1) {
    return jsx(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-link",
      onPress() {
        const openUrl = closure_1_1(closure_1_2[7]).openUrl;
        closure_1_1(closure_1_2[7]);
        const getArticleURL = closure_1_1(closure_1_2[8]).getArticleURL;
        closure_1_1(closure_1_2[8]);
        const intl = closure_1_0(closure_1_2[9]).intl;
        return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[10]).agiNYw)));
      },
      children
    }, arg1);
  }
  const obj = ManualReviewInconclusiveCopyExperiment;
  const isManualReviewInconclusiveCopyEnabled = obj.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  const AlertModal = AlertModal2.AlertModal;
  let intl = intl4.intl;
  const intl2 = intl4.intl;
  const format = intl2.format;
  const tmp5 = _modDef3188;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj3 = { contentAndSettingsHook };
    formatResult = format(tmp5.UIbYzl, obj3);
  } else {
    const prop = tmp5["2+f8w1"];
    if (teenAgeRange == null) {
      teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj4 = { teenAgeRange, contentAndSettingsHook };
    formatResult = format(prop, obj4);
  }
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  const obj7 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN } };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN });
  return <AlertModal title={intl.string(_modDef3188.AA3xYb)} content={formatResult} actions={null} trackingProps={obj7} />;
});
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default tmp3;
