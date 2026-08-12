// Module ID: 17037
// Function ID: 17038
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4344, 4340, 1236, 2565, 7838, 7840, 2]
// Exports: default

// Module 17037 (AgeUpdateFooter)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { textAlign: "center" } });
const result = require("createCacheKey").fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: callback().text, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = {
    handleAgeVerifyHook() {
      let obj = callback2(7838);
      obj = { entryPoint: callback(7840).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2565).ifObbX, obj);
  return jsx(require(4340) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7838);
      obj = { entryPoint: callback(7840).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
