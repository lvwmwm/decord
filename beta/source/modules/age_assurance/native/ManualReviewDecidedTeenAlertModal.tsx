// Module ID: 8048
// Function ID: 8049
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 7864, 21, 558, 576, 1127, 3106, 4833, 7863, 2114, 5210, 5210, 2]

// Module 8048 (ManualReviewDecidedTeenAlertModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _modDef3106 from "module_3106" /* 3106 */;
import Text_Text from "Text/Text" /* 4833 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7864 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let teenAgeRange;

let tmp;
const intl4 = tmp(1127);
const AlertModal2 = tmp(5210);
const FALLBACK_TEEN_AGE_RANGE = AgeVerificationConstants.FALLBACK_TEEN_AGE_RANGE;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((teenAgeRange) => {
  let first;
  let intl3;
  let tmp14;
  let tmp17;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  teenAgeRange = teenAgeRange.teenAgeRange;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = intl4.intl;
    const stringResult = intl.string(_modDef3106.AA3xYb);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== teenAgeRange) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(children, arg1) {
        return jsx(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-link",
          onPress() {
            const openUrl = closure_1_1(closure_1_2[8]).openUrl;
            closure_1_1(closure_1_2[8]);
            const getArticleURL = closure_1_1(closure_1_2[9]).getArticleURL;
            closure_1_1(closure_1_2[9]);
            const intl = closure_1_0(closure_1_2[5]).intl;
            return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[6]).agiNYw)));
          },
          children
        }, arg1);
      };
      cResult[3] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    const intl2 = intl4.intl;
    const format = intl2.format;
    let tmp12 = teenAgeRange;
    const prop = _modDef3106["2+f8w1"];
    if (teenAgeRange == null) {
      tmp12 = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj2 = { teenAgeRange: tmp12, contentAndSettingsHook: tmp8 };
    const formatResult = format(prop, obj2);
    cResult[1] = teenAgeRange;
    cResult[2] = formatResult;
    tmp7 = formatResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const AlertActions = AlertModal2.AlertActions;
    ({ text: intl3.string(intl4.t["NX+WJN"]) });
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl4.intl;
    const tmp16 = <AlertActions>{null}</AlertActions>;
    cResult[4] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== tmp7) {
    const tmp19 = jsx(AlertModal2.AlertModal, { title: first, content: tmp7, actions: tmp14 });
    cResult[5] = tmp7;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  return tmp17;
}) : ((teenAgeRange) => {
  let AlertActionButton;
  let AlertActions;
  let format;
  let intl;
  let intl3;
  let obj2;
  let obj3;
  let obj4;
  let prop;
  teenAgeRange = teenAgeRange.teenAgeRange;
  const tmp = jsx;
  const obj = { title: intl.string(_modDef3106.AA3xYb), content: format(prop, obj2), actions: tmp(AlertActions, obj3) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl4.intl;
  const intl2 = intl4.intl;
  format = intl2.format;
  prop = _modDef3106["2+f8w1"];
  if (teenAgeRange == null) {
    teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
  }
  obj2 = {
    teenAgeRange,
    contentAndSettingsHook(children, arg1) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const openUrl = closure_1_1(closure_1_2[8]).openUrl;
          closure_1_1(closure_1_2[8]);
          const getArticleURL = closure_1_1(closure_1_2[9]).getArticleURL;
          closure_1_1(closure_1_2[9]);
          const intl = closure_1_0(closure_1_2[5]).intl;
          return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[6]).agiNYw)));
        },
        children
      }, arg1);
    }
  };
  obj3 = { children: tmp(AlertActionButton, obj4, "got-it") };
  AlertActions = AlertModal2.AlertActions;
  obj4 = { text: intl3.string(intl4.t["NX+WJN"]) };
  AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return tmp(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default tmp3;
