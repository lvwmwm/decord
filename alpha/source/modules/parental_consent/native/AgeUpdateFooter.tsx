// Module ID: 17933
// Function ID: 17934
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4866, 4862, 1115, 2781, 8054, 8056, 2]
// Exports: default

// Module 17933 (AgeUpdateFooter)
import util from "util" /* 1115 */;
import _modDef2781 from "module_2781" /* 2781 */;
import Text_Text from "Text/Text" /* 4862 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8054 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8056 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef2781.ifObbX, {
    handleAgeVerifyHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      return obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT });
    }
  });
  return jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null });
};
