// Module ID: 16821
// Function ID: 16822
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4255, 4251, 1236, 2517, 7692, 7694, 2]
// Exports: default

// Module 16821 (AgeUpdateFooter)
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
      let obj = callback2(7692);
      obj = { entryPoint: callback(7694).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2517).ifObbX, obj);
  return jsx(require(4251) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7692);
      obj = { entryPoint: callback(7694).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
