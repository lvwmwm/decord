// Module ID: 16720
// Function ID: 16721
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4189, 4185, 1236, 2485, 6747, 6749, 2]
// Exports: default

// Module 16720 (AgeUpdateFooter)
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
      let obj = callback2(6747);
      obj = { entryPoint: callback(6749).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2485).ifObbX, obj);
  return jsx(require(4185) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(6747);
      obj = { entryPoint: callback(6749).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
