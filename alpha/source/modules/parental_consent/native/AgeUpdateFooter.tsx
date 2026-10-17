// Module ID: 19098
// Function ID: 19099
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 5191, 558, 576, 1128, 2885, 7764, 6174, 5187, 2]

// Module 19098 (AgeUpdateFooter)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import _modDef2885 from "module_2885" /* 2885 */;
import Text_Text from "Text/Text" /* 5187 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6174 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7764 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeUpdateFooter() {
  let first;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_4();
  const text = tmp4.text;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    let obj2 = {
      handleAgeVerifyHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
          return obj.showAgeVerificationGetStartedModal(obj2);
        }
    };
    const formatResult = intl.format(_modDef2885.ifObbX, obj2);
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const tmp10 = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: text, children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function AgeUpdateFooter() {
  closure_4();
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  let obj2 = {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj2);
    }
  };
  return <Text variant="text-md/medium" color="text-muted" style={closure_4().text}>{intl.format(_modDef2885.ifObbX, obj2)}</Text>;
});
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default tmp3;
