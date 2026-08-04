// Module ID: 16841
// Function ID: 16842
// Name: AgeUpdateFooter
// Dependencies: [19, 21, 4285, 4281, 1236, 2547, 7720, 7722, 2]
// Exports: default

// Module 16841 (AgeUpdateFooter)
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
      let obj = callback2(7720);
      obj = { entryPoint: callback(7722).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(importDefault(2547).ifObbX, obj);
  return jsx(require(4281) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7720);
      obj = { entryPoint: callback(7722).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
