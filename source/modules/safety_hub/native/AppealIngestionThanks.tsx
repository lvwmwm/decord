// Module ID: 11080
// Function ID: 86212
// Name: AppealIngestionThanks
// Dependencies: [31, 27, 33, 4130, 11068, 5121, 1273, 2]
// Exports: default

// Module 11080 (AppealIngestionThanks)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = callback();
  let obj = {};
  obj = { style: tmp.container };
  obj = { bottom: true, style: tmp.container, children: jsx(require(1273) /* Button */.LegacyText, { children: "TODO - Thanks" }) };
  obj.children = jsx(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(require(1273) /* Button */.LegacyText, { children: "TODO - Thanks" }) });
  obj.children = <View bottom style={tmp.container}>{jsx(require(1273) /* Button */.LegacyText, { children: "TODO - Thanks" })}</View>;
  return jsx(require(11068) /* getHeader */.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: jsx(require(1273) /* Button */.LegacyText, { children: "TODO - Thanks" }) });
};
