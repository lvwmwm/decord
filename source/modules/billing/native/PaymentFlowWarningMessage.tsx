// Module ID: 7193
// Function ID: 57897
// Name: PaymentFlowWarningMessage
// Dependencies: [31, 27, 33, 4130, 689, 4973, 1273, 4126, 2]
// Exports: default

// Module 7193 (PaymentFlowWarningMessage)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 10, marginVertical: 5, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { marginRight: 10 };
_createForOfIteratorHelperLoose.text = { flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default function PaymentFlowWarningMessage(children) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.icon, color: importDefault(689).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const items = [callback(require(1273) /* Button */.WarningCircle, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: children.message };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
