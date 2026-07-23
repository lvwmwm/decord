// Module ID: 12322
// Function ID: 95930
// Name: createCtaButton
// Dependencies: [5671, 11056, 4347, 1212, 2]
// Exports: createCtaButton

// Module 12322 (createCtaButton)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("isReactiveCheckEnabled").fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButton = function createCtaButton(id, channel_id, arg2) {
  let obj = require(11056) /* CtaButtonType */;
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  let obj1 = require(4347) /* isReactiveCheckEnabled */;
  const isAgeVerifiedResult = obj1.isAgeVerified();
  const result = require(4347) /* isReactiveCheckEnabled */.shouldShowTiggerPawtect();
  if (require(11056) /* CtaButtonType */.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.text = intl3.string(require(1212) /* getSystemLocale */.t["4q1Elf"]);
    ({ reportFpTextColor: obj6.textColor, reportFpBackgroundColor: obj6.backgroundColor } = arg2);
    let prop;
    if (_isNativeReflectConstruct.canSubmitFpReport(id)) {
      prop = require(11056) /* CtaButtonType */.CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    obj.callback = prop;
    return obj;
  } else if (require(11056) /* CtaButtonType */.CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const string = intl2.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t["9KiIz6"]);
    } else {
      stringResult = string(t["/nicWo"]);
    }
    obj.text = stringResult;
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = require(11056) /* CtaButtonType */.CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    obj.callback = prop1;
    return obj;
  } else if (require(11056) /* CtaButtonType */.CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    obj1 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.text = intl.string(require(1212) /* getSystemLocale */.t.n8a49k);
    ({ retryTextColor: obj4.textColor, retryBackgroundColor: obj4.backgroundColor } = arg2);
    obj1.callback = require(11056) /* CtaButtonType */.CtaButtonType.CONNECT_TO_TEEN;
    return obj1;
  }
  const obj3 = require(4347) /* isReactiveCheckEnabled */;
};
