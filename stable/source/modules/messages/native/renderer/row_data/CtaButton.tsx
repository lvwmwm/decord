// Module ID: 13381
// Function ID: 13382
// Name: CtaButton
// Dependencies: [7396, 12045, 4849, 1114, 2978, 2]
// Exports: createCtaButtons

// Module 13381 (CtaButton)
import _modDef2978 from "module_2978" /* 2978 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4849 */;
import CtaButtonUtils from "CtaButtonUtils" /* 12045 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7396 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  const ctaButtonType = CtaButtonUtils.getCtaButtonType(id, channel_id);
  const isAgeVerifiedResult = AgeVerificationUtils.isAgeVerified();
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  if (CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    const obj4 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl4 = tmp(1114).intl;
    obj4.text = intl4.string(tmp(1114).t["4q1Elf"]);
    ({ reportFpTextColor: obj10.textColor, reportFpBackgroundColor: obj10.backgroundColor } = arg2);
    let prop;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = tmp(12045).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    const obj7 = { ctaButton: null };
    obj4.callback = prop;
    obj7.ctaButton = obj4;
    return obj7;
  } else if (tmp(12045).CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = tmp(1114).intl;
    const string = intl2.string;
    const t = tmp(1114).t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t["9KiIz6"]);
    } else {
      stringResult = string(t["/nicWo"]);
    }
    const obj8 = { text: stringResult, textColor: null, backgroundColor: null, callback: null };
    ({ retryTextColor: obj6.textColor, retryBackgroundColor: obj6.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = tmp(12045).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    const obj11 = { ctaButton: null, secondaryCtaButton: null };
    obj8.callback = prop1;
    obj11.ctaButton = obj8;
    let tmp8;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj18 = { text: null, textColor: null, backgroundColor: null, callback: null };
      const intl3 = tmp(1114).intl;
      obj18.text = intl3.string(_modDef2978.Z61nkt);
      ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
      let prop2;
      if (result) {
        prop2 = tmp(12045).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      obj18.callback = prop2;
      tmp8 = obj18;
    }
    obj11.secondaryCtaButton = tmp8;
    return obj11;
  } else if (tmp(12045).CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj19 = { ctaButton: null };
    const obj20 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = tmp(1114).intl;
    obj20.text = intl.string(tmp(1114).t.n8a49k);
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    obj20.callback = tmp(12045).CtaButtonType.CONNECT_TO_TEEN;
    obj19.ctaButton = obj20;
    return obj19;
  } else {
    return {};
  }
};
