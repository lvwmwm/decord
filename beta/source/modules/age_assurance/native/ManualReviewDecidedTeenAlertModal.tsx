// Module ID: 8044
// Function ID: 8045
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 7860, 21, 5209, 1115, 3103, 4832, 7859, 2111, 5209, 2]
// Exports: default

// Module 8044 (ManualReviewDecidedTeenAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import _modDef3103 from "module_3103" /* 3103 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertModal2 from "AlertModal" /* 5209 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7860 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const FALLBACK_TEEN_AGE_RANGE = AgeVerificationConstants.FALLBACK_TEEN_AGE_RANGE;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  let AlertActionButton;
  let AlertActions;
  let format;
  let intl;
  let intl3;
  let obj2;
  let obj3;
  let obj4;
  let prop;
  teenAgeRange = teenAgeRange.teenAgeRange;
  const tmp = jsx;
  const obj = { title: intl.string(_modDef3103.AA3xYb), content: format(prop, obj2), actions: tmp(AlertActions, obj3) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl4.intl;
  const intl2 = intl4.intl;
  format = intl2.format;
  prop = _modDef3103["2+f8w1"];
  if (teenAgeRange == null) {
    teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
  }
  obj2 = {
    teenAgeRange,
    contentAndSettingsHook(children, arg1) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const openUrl = closure_1_1(closure_1_2[7]).openUrl;
          closure_1_1(closure_1_2[7]);
          const getArticleURL = closure_1_1(closure_1_2[8]).getArticleURL;
          closure_1_1(closure_1_2[8]);
          const intl = closure_1_0(closure_1_2[4]).intl;
          return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[5]).agiNYw)));
        },
        children
      }, arg1);
    }
  };
  obj3 = { children: tmp(AlertActionButton, obj4, "got-it") };
  AlertActions = AlertModal2.AlertActions;
  obj4 = { text: intl3.string(intl4.t["NX+WJN"]) };
  AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return tmp(AlertModal, obj);
};
