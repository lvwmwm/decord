// Module ID: 16967
// Function ID: 16968
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4303, 4299, 1236, 2546, 7797, 7799, 2]
// Exports: default

// Module 16967 (AgeUpdateFooter)
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
      let obj = callback2(7797);
      obj = { entryPoint: callback(7799).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2546).ifObbX, obj);
  return jsx(require(4299) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7797);
      obj = { entryPoint: callback(7799).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
