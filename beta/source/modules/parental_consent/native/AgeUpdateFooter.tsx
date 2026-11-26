// Module ID: 20168
// Function ID: 20169
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4913, 5504, 1112, 3120, 7793, 6414, 2]
// Exports: default

// Module 20168 (AgeUpdateFooter)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3120 from "module_3120" /* 3120 */;
import Text_Text from "Text/Text" /* 5504 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6414 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7793 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
  return <Text variant="body-md/medium" color="text-muted" style={closure_4().text}>{intl.format(_modDef3120.ifObbX, obj2)}</Text>;
};
