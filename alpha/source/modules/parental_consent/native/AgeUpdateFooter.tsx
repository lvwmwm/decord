// Module ID: 20413
// Function ID: 20414
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 5143, 5763, 1113, 2963, 8100, 6867, 2]
// Exports: default

// Module 20413 (AgeUpdateFooter)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2963 from "module_2963" /* 2963 */;
import Text_Text from "Text/Text" /* 5763 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6867 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8100 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
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
  return <Text variant="body-md/medium" color="text-muted" style={closure_4().text}>{intl.format(_modDef2963.ifObbX, obj2)}</Text>;
};
