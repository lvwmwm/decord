// Module ID: 8899
// Function ID: 8900
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 8720, 21, 558, 568, 1119, 3102, 4786, 8719, 2112, 5148, 5148, 2]

// Module 8899 (ManualReviewDecidedTeenAlertModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef3102 from "module_3102" /* 3102 */;
import Text_Text from "Text/Text" /* 4786 */;
import AlertModal from "AlertModal" /* 5148 */;
import noop from "module_19" /* 19 */;

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(8720).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((teenAgeRange) => {
  const cResult = c.c(7);
  teenAgeRange = teenAgeRange.teenAgeRange;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1119).intl;
    const stringResult = intl.string(_modDef3102.AA3xYb);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== teenAgeRange) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(children, arg1) {
        return jsx(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-link",
          onPress() {
            const obj = closure_1_1(8719);
            const intl = closure_1_0(1119).intl;
            return obj.openUrl(closure_1_1(2112).getArticleURL(intl.string(closure_1_1(3102).agiNYw)));
          },
          children
        }, arg1);
      };
      cResult[3] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    const intl2 = tmp(1119).intl;
    let tmp11 = teenAgeRange;
    if (teenAgeRange == null) {
      tmp11 = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj2 = { teenAgeRange: tmp11, contentAndSettingsHook: tmp8 };
    const formatResult = intl2.format(_modDef3102["2+f8w1"], obj2);
    cResult[1] = teenAgeRange;
    cResult[2] = formatResult;
    let tmp7 = formatResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { children: null };
    const obj4 = { text: null };
    const intl3 = tmp(1119).intl;
    obj4.text = intl3.string(tmp(1119).t["NX+WJN"]);
    obj3.children = jsx(tmp(5148).AlertActionButton, { text: null }, "got-it");
    const tmp15 = jsx(tmp(5148).AlertActions, { children: null });
    cResult[4] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp7) {
    const obj5 = { title: first, content: tmp7, actions: tmp13 };
    const tmp18 = jsx(tmp(5148).AlertModal, { title: first, content: tmp7, actions: tmp13 });
    cResult[5] = tmp7;
    cResult[6] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[6];
  }
  return tmp16;
}) : ((teenAgeRange) => {
  teenAgeRange = teenAgeRange.teenAgeRange;
  let obj = { title: null, content: null, actions: null };
  let intl = util.intl;
  obj.title = intl.string(_modDef3102.AA3xYb);
  const intl2 = util.intl;
  if (teenAgeRange == null) {
    teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
  }
  obj.content = intl2.format(_modDef3102["2+f8w1"], {
    teenAgeRange,
    contentAndSettingsHook(children, arg1) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(8719);
          const intl = closure_1_0(1119).intl;
          return obj.openUrl(closure_1_1(2112).getArticleURL(intl.string(closure_1_1(3102).agiNYw)));
        },
        children
      }, arg1);
    }
  });
  const obj3 = { children: null };
  const obj4 = { text: null };
  const intl3 = tmp2(1119).intl;
  obj4.text = intl3.string(util.t["NX+WJN"]);
  obj3.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
});
