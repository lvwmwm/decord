// Module ID: 14546
// Function ID: 14547
// Name: CtaButton
// Dependencies: [7388, 12829, 6652, 1128, 12831, 3154, 2]
// Exports: createCtaButtons

// Module 14546 (CtaButton)
import intl5 from "intl" /* 1128 */;
import _modDef3154 from "module_3154" /* 3154 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6652 */;
import CtaButtonUtils from "CtaButtonUtils" /* 12829 */;
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils" /* 12831 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7388 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  let intl;
  let intl3;
  let intl4;
  let obj19;
  let prop;
  let prop1;
  let prop2;
  let tmp7;
  const obj = CtaButtonUtils;
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  const obj2 = AgeVerificationUtils;
  const result = obj2.shouldShowTiggerPawtect();
  if (CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    const obj3 = { text: intl4.string(intl5.t["4q1Elf"]), textColor: null, backgroundColor: null, callback: prop };
    intl4 = tmp(1128).intl;
    ({ reportFpTextColor: obj10.textColor, reportFpBackgroundColor: obj10.backgroundColor } = arg2);
    prop = undefined;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = tmp(12829).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    return { ctaButton: obj3 };
  } else if (CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = tmp(1128).intl;
    const string = intl2.string;
    const tmpResult = AgeVerificationSystemNotificationUtils;
    const result1 = tmpResult.isAgeVerificationMessageWithConfirmAgeCta(channel_id, id);
    const t = tmp(1128).t;
    ({ retryTextColor: obj6.textColor, retryBackgroundColor: obj6.backgroundColor } = arg2);
    const obj7 = { text: string(result1 ? t.DVywUB : t["/nicWo"]), textColor: null, backgroundColor: null, callback: prop1 };
    prop1 = undefined;
    if (result) {
      prop1 = tmp(12829).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    const obj8 = { ctaButton: obj7, secondaryCtaButton: tmp7 };
    tmp7 = undefined;
    const tmpResult2 = AgeVerificationSystemNotificationUtils;
    if (tmpResult2.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj11 = { text: intl3.string(_modDef3154.Z61nkt), textColor: null, backgroundColor: null, callback: prop2 };
      intl3 = tmp(1128).intl;
      ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
      prop2 = undefined;
      if (result) {
        prop2 = tmp(12829).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      tmp7 = obj11;
    }
    return obj8;
  } else if (CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj18 = { ctaButton: obj19 };
    obj19 = { text: intl.string(intl5.t.n8a49k), textColor: null, backgroundColor: null, callback: CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN };
    intl = tmp(1128).intl;
    ({ retryTextColor: obj4.textColor, retryBackgroundColor: obj4.backgroundColor } = arg2);
    return obj18;
  } else {
    return {};
  }
};
