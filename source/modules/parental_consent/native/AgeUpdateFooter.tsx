// Module ID: 16881
// Function ID: 16882
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4302, 4298, 1236, 2546, 7737, 7739, 2]
// Exports: default

// Module 16881 (AgeUpdateFooter)
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
      let obj = callback2(7737);
      obj = { entryPoint: callback(7739).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2546).ifObbX, obj);
  return jsx(require(4298) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7737);
      obj = { entryPoint: callback(7739).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
