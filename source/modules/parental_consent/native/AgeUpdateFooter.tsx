// Module ID: 16621
// Function ID: 129614
// Name: AgeUpdateFooter
// Dependencies: [31, 33, 4130, 4126, 1212, 2460, 7581, 7583, 2]
// Exports: default

// Module 16621 (AgeUpdateFooter)
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
  obj.children = intl.format(importDefault(2460).ifObbX, obj);
  return jsx(require(4126) /* Text */.Text, {
    handleAgeVerifyHook() {
      let obj = outer1_1(outer1_2[6]);
      obj = { entryPoint: outer1_0(outer1_2[7]).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};
