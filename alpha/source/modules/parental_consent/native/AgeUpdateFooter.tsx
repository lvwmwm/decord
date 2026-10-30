// Module ID: 20031
// Function ID: 20032
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 5009, 5619, 1114, 2835, 7947, 6723, 2]
// Exports: default

// Module 20031 (AgeUpdateFooter)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import _modDef2835 from "module_2835" /* 2835 */;
import Text_Text from "Text/Text" /* 5619 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
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
  return <Text variant="text-md/medium" color="text-muted" style={closure_4().text}>{intl.format(_modDef2835.ifObbX, obj2)}</Text>;
};
