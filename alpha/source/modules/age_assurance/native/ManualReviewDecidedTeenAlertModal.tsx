// Module ID: 8259
// Function ID: 8260
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 6808, 21, 5781, 8046, 2185, 1113, 3348, 6122, 6122, 1260, 2]
// Exports: default

// Module 8259 (ManualReviewDecidedTeenAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import _modDef3348 from "module_3348" /* 3348 */;
import Text_Text from "Text/Text" /* 5781 */;
import AlertModal2 from "AlertModal" /* 6122 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6808 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const discord_common_AnalyticsUtils = tmp2(1260);
const FALLBACK_TEEN_AGE_RANGE = AgeVerificationConstants.FALLBACK_TEEN_AGE_RANGE;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  let AlertActionButton;
  let AlertActions;
  let formatResult;
  let intl;
  let intl3;
  let obj4;
  let obj5;
  let obj6;
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, arg1) {
    return jsx(Text_Text.Text, {
      variant: "body-md/normal",
      color: "text-link",
      onPress() {
        const openUrl = closure_1_1(closure_1_2[4]).openUrl;
        closure_1_1(closure_1_2[4]);
        const getArticleURL = closure_1_1(closure_1_2[5]).getArticleURL;
        closure_1_1(closure_1_2[5]);
        const intl = closure_1_0(closure_1_2[6]).intl;
        return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[7]).agiNYw)));
      },
      children
    }, arg1);
  }
  const tmp = jsx;
  const decidedPassed = teenAgeRange.decidedPassed;
  const obj = { title: intl.string(_modDef3348.AA3xYb), content: formatResult, actions: tmp(AlertActions, obj4), trackingProps: obj6 };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl4.intl;
  const intl2 = intl4.intl;
  const format = intl2.format;
  const tmp4 = _modDef3348;
  if (decidedPassed) {
    const prop = tmp4["2+f8w1"];
    if (teenAgeRange == null) {
      teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj2 = { teenAgeRange, contentAndSettingsHook };
    formatResult = format(prop, obj2);
  } else {
    const obj3 = { contentAndSettingsHook };
    formatResult = format(tmp4.UIbYzl, obj3);
  }
  obj4 = { children: tmp(AlertActionButton, obj5, "got-it") };
  AlertActions = AlertModal2.AlertActions;
  obj5 = { text: intl3.string(intl4.t["NX+WJN"]) };
  AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  obj6 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN } };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN });
  return tmp(AlertModal, obj);
};
