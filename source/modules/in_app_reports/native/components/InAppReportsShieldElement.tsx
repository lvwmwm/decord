// Module ID: 7650
// Function ID: 61283
// Name: ShieldElement
// Dependencies: [31, 27, 33, 4131, 6727, 2]
// Exports: default

// Module 7650 (ShieldElement)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(require(6727) /* AccountAgeTier10LargeBadge */.ShieldSpotIllustration, { width: 100, height: 100 }) };
      tmp2 = <View style={tmp.container}>{jsx(require(6727) /* AccountAgeTier10LargeBadge */.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
};
