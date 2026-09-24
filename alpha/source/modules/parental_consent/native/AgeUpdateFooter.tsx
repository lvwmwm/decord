// Module ID: 18444
// Function ID: 18445
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4829, 4825, 1115, 2780, 8761, 8763, 2]
// Exports: default

// Module 18444 (AgeUpdateFooter)
import util from "util" /* 1115 */;
import _modDef2780 from "module_2780" /* 2780 */;
import Text_Text from "Text/Text" /* 4825 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8761 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8763 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2780.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null });
};
