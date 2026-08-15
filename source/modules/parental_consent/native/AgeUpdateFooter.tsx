// Module ID: 17101
// Function ID: 17102
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4661, 4734, 1236, 2597, 5428, 5254, 2]
// Exports: default

// Module 17101 (AgeUpdateFooter)
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
      let obj = callback2(5428);
      obj = { entryPoint: callback(5254).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2597).ifObbX, obj);
  return jsx(require(4734) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(5428);
      obj = { entryPoint: callback(5254).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
