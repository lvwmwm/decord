// Module ID: 11081
// Function ID: 86214
// Name: AppealIngestionSpam
// Dependencies: [31, 27, 33, 4130, 11068, 5121, 1273, 2]
// Exports: default

// Module 11081 (AppealIngestionSpam)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default function AppealIngestionSpam() {
  const tmp = callback();
  let obj = {};
  obj = { style: tmp.container };
  obj = { bottom: true, style: tmp.container, children: jsx(require(1273) /* Button */.LegacyText, { children: "TODO - SPAM" }) };
  obj.children = jsx(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(require(1273) /* Button */.LegacyText, { children: "TODO - SPAM" }) });
  obj.children = <View bottom style={tmp.container}>{jsx(require(1273) /* Button */.LegacyText, { children: "TODO - SPAM" })}</View>;
  return jsx(require(11068) /* getHeader */.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: jsx(require(1273) /* Button */.LegacyText, { children: "TODO - SPAM" }) });
};
