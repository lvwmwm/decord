// Module ID: 16644
// Function ID: 129829
// Name: AgeUpdateFooter
// Dependencies: [31, 33, 4131, 4127, 1212, 2461, 6690, 6692, 2]
// Exports: default

// Module 16644 (AgeUpdateFooter)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ text: { textAlign: "center" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: callback().text };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {
    handleAgeVerifyHook() {
      let obj = outer1_1(outer1_2[6]);
      obj = { entryPoint: outer1_0(outer1_2[7]).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj.children = intl.format(importDefault(2461).ifObbX, obj);
  return jsx(require(4127) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = outer1_1(outer1_2[6]);
      obj = { entryPoint: outer1_0(outer1_2[7]).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
