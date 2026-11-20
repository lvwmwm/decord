// Module ID: 20029
// Function ID: 20030
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4794, 5385, 1112, 3021, 7673, 6295, 2]
// Exports: default

// Module 20029 (AgeUpdateFooter)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3021 from "module_3021" /* 3021 */;
import Text_Text from "Text/Text" /* 5385 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6295 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7673 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
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
  return <Text variant="body-md/medium" color="text-muted" style={closure_4().text}>{intl.format(_modDef3021.ifObbX, obj2)}</Text>;
};
