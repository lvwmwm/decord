// Module ID: 16095
// Function ID: 124299
// Name: AgeGateVerify
// Dependencies: [31, 27, 33, 4165, 689, 4380, 4382, 5155, 6763, 4161, 4578, 6726, 6728, 2]
// Exports: default

// Module 16095 (AgeGateVerify)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { textAlign: "center" };
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
_createForOfIteratorHelperLoose.buttonWrapper = { width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  let verifyGateDescription;
  let verifyTitle;
  source = source.source;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(4380) /* shouldAgeVerifyForAgeGate */;
  const ageGateVerifyContent = obj.useAgeGateVerifyContent(source);
  const verifyAgreementButtonText = ageGateVerifyContent.verifyAgreementButtonText;
  ({ verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  let obj1 = require(4382) /* isReactiveCheckEnabled */;
  const maybePerformReactiveCheckForSource = obj1.useMaybePerformReactiveCheckForSource(source);
  obj = { top: true, style: tmp.container };
  const items = [callback(require(6763) /* AccountAgeTier10LargeBadge */.ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle };
  items[1] = callback(require(4161) /* Text */.Text, obj);
  obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription };
  items[2] = callback(require(4161) /* Text */.Text, obj1);
  let tmp5 = null != verifyAgreementButtonText;
  if (tmp5) {
    const obj2 = { style: tmp.buttonWrapper };
    const obj3 = {
      text: verifyAgreementButtonText,
      onPress() {
          let obj = outer1_1(outer1_2[11]);
          obj = { entryPoint: outer1_0(outer1_2[12]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
          const result = obj.showAgeVerificationGetStartedModal(obj);
        },
      grow: true
    };
    obj2.children = callback(require(4578) /* Button */.Button, obj3);
    tmp5 = callback(View, obj2);
  }
  items[3] = tmp5;
  obj.children = items;
  return closure_5(require(5155) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
