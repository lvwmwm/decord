// Module ID: 17048
// Function ID: 17049
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4342, 4338, 1236, 2565, 7842, 7844, 2]
// Exports: default

// Module 17048 (AgeUpdateFooter)
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
      let obj = callback2(7842);
      obj = { entryPoint: callback(7844).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2565).ifObbX, obj);
  return jsx(require(4338) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7842);
      obj = { entryPoint: callback(7844).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
