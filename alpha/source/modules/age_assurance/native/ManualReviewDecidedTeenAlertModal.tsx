// Module ID: 7695
// Function ID: 7696
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 5915, 21, 558, 576, 7696, 5087, 7497, 2127, 1126, 3181, 5304, 5304, 2]

// Module 7695 (ManualReviewDecidedTeenAlertModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _modDef3181 from "module_3181" /* 3181 */;
import Text_Text from "Text/Text" /* 5087 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 5915 */;
import ManualReviewInconclusiveCopyExperiment from "ManualReviewInconclusiveCopyExperiment" /* 7696 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const intl4 = tmp(1126);
const AlertModal2 = tmp(5304);
const FALLBACK_TEEN_AGE_RANGE = AgeVerificationConstants.FALLBACK_TEEN_AGE_RANGE;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  let first;
  let formatResult;
  let intl3;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(8);
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
    const stringResult = intl.string(_modDef3181.AA3xYb);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === isManualReviewInconclusiveCopyEnabled) {
    let tmp9;
    let tmp15;
    let tmp18;
    if (cResult[3] === teenAgeRange) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const AlertActions = AlertModal2.AlertActions;
      ({ text: intl3.string(intl4.t["NX+WJN"]) });
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl3 = intl4.intl;
      const tmp17 = <AlertActions>{null}</AlertActions>;
      cResult[5] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] !== tmp9) {
      const tmp20 = jsx(AlertModal2.AlertModal, { title: tmp6, content: tmp9, actions: tmp15 });
      cResult[6] = tmp9;
      cResult[7] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[7];
    }
    return tmp18;
  }
  const intl2 = intl4.intl;
  const format = intl2.format;
  const tmp10 = _modDef3181;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj6 = { contentAndSettingsHook: first };
    formatResult = format(tmp10.UIbYzl, obj6);
  } else {
    let tmp13 = teenAgeRange;
    const prop = tmp10["2+f8w1"];
    if (teenAgeRange == null) {
      tmp13 = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj7 = { teenAgeRange: tmp13, contentAndSettingsHook: first };
    formatResult = format(prop, obj7);
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
  const tmp5 = _modDef3181;
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
  return <AlertModal title={intl.string(_modDef3181.AA3xYb)} content={formatResult} actions={null} />;
});
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default tmp3;
