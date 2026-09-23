// Module ID: 13641
// Function ID: 13642
// Name: CtaButton
// Dependencies: [7621, 12247, 5039, 1115, 3100, 2]
// Exports: createCtaButtons

// Module 13641 (CtaButton)
import _modDef3100 from "module_3100" /* 3100 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5039 */;
import CtaButtonUtils from "CtaButtonUtils" /* 12247 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7621 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  const ctaButtonType = CtaButtonUtils.getCtaButtonType(id, channel_id);
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  if (CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    const obj3 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl4 = tmp(1115).intl;
    obj3.text = intl4.string(tmp(1115).t["4q1Elf"]);
    ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
    let prop;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = tmp(12247).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    const obj6 = { ctaButton: null };
    obj3.callback = prop;
    obj6.ctaButton = obj3;
    return obj6;
  } else if (tmp(12247).CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const obj7 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl2 = tmp(1115).intl;
    obj7.text = intl2.string(tmp(1115).t["/nicWo"]);
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = tmp(12247).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    const obj10 = { ctaButton: null, secondaryCtaButton: null };
    obj7.callback = prop1;
    obj10.ctaButton = obj7;
    let tmp6;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj17 = { text: null, textColor: null, backgroundColor: null, callback: null };
      const intl3 = tmp(1115).intl;
      obj17.text = intl3.string(_modDef3100.Z61nkt);
      ({ reportFpTextColor: obj8.textColor, reportFpBackgroundColor: obj8.backgroundColor } = arg2);
      let prop2;
      if (result) {
        prop2 = tmp(12247).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      obj17.callback = prop2;
      tmp6 = obj17;
    }
    obj10.secondaryCtaButton = tmp6;
    return obj10;
  } else if (tmp(12247).CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj18 = { ctaButton: null };
    const obj19 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = tmp(1115).intl;
    obj19.text = intl.string(tmp(1115).t.n8a49k);
    ({ retryTextColor: obj4.textColor, retryBackgroundColor: obj4.backgroundColor } = arg2);
    obj19.callback = tmp(12247).CtaButtonType.CONNECT_TO_TEEN;
    obj18.ctaButton = obj19;
    return obj18;
  } else {
    return {};
  }
};
