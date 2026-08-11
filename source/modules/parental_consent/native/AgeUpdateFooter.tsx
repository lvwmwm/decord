// Module ID: 16979
// Function ID: 16980
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4303, 4299, 1236, 2565, 7799, 7801, 2]
// Exports: default

// Module 16979 (AgeUpdateFooter)
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
      let obj = callback2(7799);
      obj = { entryPoint: callback(7801).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2565).ifObbX, obj);
  return jsx(require(4299) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7799);
      obj = { entryPoint: callback(7801).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
