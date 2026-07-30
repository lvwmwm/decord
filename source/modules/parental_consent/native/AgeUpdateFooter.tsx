// Module ID: 16714
// Function ID: 16715
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4189, 4185, 1236, 2485, 6744, 6746, 2]
// Exports: default

// Module 16714 (AgeUpdateFooter)
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
      let obj = callback2(6744);
      obj = { entryPoint: callback(6746).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2485).ifObbX, obj);
  return jsx(require(4185) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(6744);
      obj = { entryPoint: callback(6746).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
