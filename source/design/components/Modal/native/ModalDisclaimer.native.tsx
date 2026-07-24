// Module ID: 13140
// Function ID: 101167
// Name: ModalDisclaimer
// Dependencies: [31, 27, 33, 4130, 4126, 2]
// Exports: ModalDisclaimer

// Module 13140 (ModalDisclaimer)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = callback();
  obj = { style: tmp.container, children: jsx(require(4126) /* Text */.Text, obj) };
  obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children };
  return <View variant="text-xs/medium" color="text-muted" style={tmp.disclaimer}>{arg0.children}</View>;
};
