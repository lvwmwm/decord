// Module ID: 18344
// Function ID: 18345
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4788, 4784, 1115, 2776, 8714, 8716, 2]
// Exports: default

// Module 18344 (AgeUpdateFooter)
import util from "util" /* 1115 */;
import _modDef2776 from "module_2776" /* 2776 */;
import Text_Text from "Text/Text" /* 4784 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8714 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8716 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2776.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null });
};
