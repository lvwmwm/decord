// Module ID: 17709
// Function ID: 17710
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4836, 4832, 1115, 2781, 7859, 7861, 2]
// Exports: default

// Module 17709 (AgeUpdateFooter)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import _modDef2781 from "module_2781" /* 2781 */;
import Text_Text from "Text/Text" /* 4832 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
  return <Text variant="text-md/medium" color="text-muted" style={closure_4().text}>{intl.format(_modDef2781.ifObbX, obj2)}</Text>;
};
