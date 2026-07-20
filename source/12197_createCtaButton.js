// Module ID: 12197
// Function ID: 93718
// Name: createCtaButton
// Dependencies: []
// Exports: createCtaButton

// Module 12197 (createCtaButton)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButton = function createCtaButton(id, channel_id, arg2) {
  let obj = channel_id(dependencyMap[1]);
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  let obj1 = channel_id(dependencyMap[2]);
  const isAgeVerifiedResult = obj1.isAgeVerified();
  const result = channel_id(dependencyMap[2]).shouldShowTiggerPawtect();
  if (channel_id(dependencyMap[1]).CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    obj = {};
    const intl3 = channel_id(dependencyMap[3]).intl;
    obj.text = intl3.string(channel_id(dependencyMap[3]).t.4q1Elf);
    ({ reportFpTextColor: obj6.textColor, reportFpBackgroundColor: obj6.backgroundColor } = arg2);
    let prop;
    if (closure_2.canSubmitFpReport(id)) {
      prop = channel_id(dependencyMap[1]).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    obj.callback = prop;
    return obj;
  } else if (channel_id(dependencyMap[1]).CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    obj = {};
    const intl2 = channel_id(dependencyMap[3]).intl;
    const string = intl2.string;
    const t = channel_id(dependencyMap[3]).t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t.9KiIz6);
    } else {
      stringResult = string(t./nicWo);
    }
    obj.text = stringResult;
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = channel_id(dependencyMap[1]).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    obj.callback = prop1;
    return obj;
  } else if (channel_id(dependencyMap[1]).CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    obj1 = {};
    const intl = channel_id(dependencyMap[3]).intl;
    obj1.text = intl.string(channel_id(dependencyMap[3]).t.n8a49k);
    ({ retryTextColor: obj4.textColor, retryBackgroundColor: obj4.backgroundColor } = arg2);
    obj1.callback = channel_id(dependencyMap[1]).CtaButtonType.CONNECT_TO_TEEN;
    return obj1;
  }
  const obj3 = channel_id(dependencyMap[2]);
};
