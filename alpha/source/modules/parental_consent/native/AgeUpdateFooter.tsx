// Module ID: 18339
// Function ID: 18340
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4756, 4752, 1115, 2776, 8682, 8684, 2]
// Exports: default

// Module 18339 (AgeUpdateFooter)
import util from "util" /* 1115 */;
import _modDef2776 from "module_2776" /* 2776 */;
import Text_Text from "Text/Text" /* 4752 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8682 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8684 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
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
