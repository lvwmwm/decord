// Module ID: 16684
// Function ID: 129990
// Name: AgeUpdateFooter
// Dependencies: [31, 33, 4165, 4161, 1212, 2461, 6726, 6728, 2]
// Exports: default

// Module 16684 (AgeUpdateFooter)
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
  return jsx(require(4161) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = outer1_1(outer1_2[6]);
      obj = { entryPoint: outer1_0(outer1_2[7]).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
