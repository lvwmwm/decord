// Module ID: 8292
// Function ID: 8293
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 6848, 21, 8293, 5747, 8079, 2190, 1113, 3319, 6084, 6084, 1260, 2]
// Exports: default

// Module 8292 (ManualReviewDecidedTeenAlertModal)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import _modDef3319 from "module_3319" /* 3319 */;
import Text_Text from "Text/Text" /* 5747 */;
import AlertModal2 from "AlertModal" /* 6084 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6848 */;
import ManualReviewInconclusiveCopyExperiment from "ManualReviewInconclusiveCopyExperiment" /* 8293 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const discord_common_AnalyticsUtils = tmp(1260);
const FALLBACK_TEEN_AGE_RANGE = AgeVerificationConstants.FALLBACK_TEEN_AGE_RANGE;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  let formatResult;
  let intl3;
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, arg1) {
    return jsx(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-link",
      onPress() {
        const openUrl = closure_1_1(closure_1_2[5]).openUrl;
        closure_1_1(closure_1_2[5]);
        const getArticleURL = closure_1_1(closure_1_2[6]).getArticleURL;
        closure_1_1(closure_1_2[6]);
        const intl = closure_1_0(closure_1_2[7]).intl;
        return openUrl(getArticleURL(intl.string(closure_1_1(closure_1_2[8]).agiNYw)));
      },
      children
    }, arg1);
  }
  const obj = ManualReviewInconclusiveCopyExperiment;
  const isManualReviewInconclusiveCopyEnabled = obj.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  const AlertModal = AlertModal2.AlertModal;
  let intl = intl4.intl;
  const intl2 = intl4.intl;
  const format = intl2.format;
  const tmp5 = _modDef3319;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj3 = { contentAndSettingsHook };
    formatResult = format(tmp5.UIbYzl, obj3);
  } else {
    const prop = tmp5["2+f8w1"];
    if (teenAgeRange == null) {
      teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj4 = { teenAgeRange, contentAndSettingsHook };
    formatResult = format(prop, obj4);
  }
  const AlertActions = AlertModal2.AlertActions;
  ({ text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  const obj7 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN } };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN });
  return <AlertModal title={intl.string(_modDef3319.AA3xYb)} content={formatResult} actions={null} trackingProps={obj7} />;
};
