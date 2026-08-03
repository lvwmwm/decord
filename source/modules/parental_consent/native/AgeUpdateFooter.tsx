// Module ID: 16809
// Function ID: 16810
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4255, 4251, 1236, 2517, 7708, 7710, 2]
// Exports: default

// Module 16809 (AgeUpdateFooter)
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
      let obj = callback2(7708);
      obj = { entryPoint: callback(7710).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2517).ifObbX, obj);
  return jsx(require(4251) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7708);
      obj = { entryPoint: callback(7710).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
