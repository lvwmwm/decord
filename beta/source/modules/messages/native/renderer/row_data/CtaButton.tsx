// Module ID: 12822
// Function ID: 12823
// Name: CtaButton
// Dependencies: [6712, 11265, 5049, 1127, 3106, 2]
// Exports: createCtaButtons

// Module 12822 (CtaButton)
import intl5 from "intl" /* 1127 */;
import _modDef3106 from "module_3106" /* 3106 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5049 */;
import CtaButtonUtils from "CtaButtonUtils" /* 11265 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6712 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj19;
  let prop;
  let prop1;
  let prop2;
  let tmp6;
  const obj = CtaButtonUtils;
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  const obj2 = AgeVerificationUtils;
  const result = obj2.shouldShowTiggerPawtect();
  if (CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    const obj3 = { text: intl4.string(intl5.t["4q1Elf"]), textColor: null, backgroundColor: null, callback: prop };
    intl4 = tmp(1127).intl;
    ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
    prop = undefined;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = tmp(11265).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    return { ctaButton: obj3 };
  } else if (CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const obj7 = { text: intl2.string(intl5.t["/nicWo"]), textColor: null, backgroundColor: null, callback: prop1 };
    intl2 = tmp(1127).intl;
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    prop1 = undefined;
    if (result) {
      prop1 = tmp(11265).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    const obj10 = { ctaButton: obj7, secondaryCtaButton: tmp6 };
    tmp6 = undefined;
    const tmpResult = AgeVerificationUtils;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj17 = { text: intl3.string(_modDef3106.Z61nkt), textColor: null, backgroundColor: null, callback: prop2 };
      intl3 = tmp(1127).intl;
      ({ reportFpTextColor: obj8.textColor, reportFpBackgroundColor: obj8.backgroundColor } = arg2);
      prop2 = undefined;
      if (result) {
        prop2 = tmp(11265).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      tmp6 = obj17;
    }
    return obj10;
  } else if (CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj18 = { ctaButton: obj19 };
    obj19 = { text: intl.string(intl5.t.n8a49k), textColor: null, backgroundColor: null, callback: CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN };
    intl = tmp(1127).intl;
    ({ retryTextColor: obj4.textColor, retryBackgroundColor: obj4.backgroundColor } = arg2);
    return obj18;
  } else {
    return {};
  }
};
