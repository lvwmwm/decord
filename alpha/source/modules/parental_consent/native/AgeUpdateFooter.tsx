// Module ID: 20725
// Function ID: 20726
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 5243, 5866, 1113, 2981, 8124, 6770, 2]
// Exports: default

// Module 20725 (AgeUpdateFooter)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2981 from "module_2981" /* 2981 */;
import Text_Text from "Text/Text" /* 5866 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6770 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8124 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
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
  return <Text variant="body-md/medium" color="text-muted" style={closure_4().text}>{intl.format(_modDef2981.ifObbX, obj2)}</Text>;
};
