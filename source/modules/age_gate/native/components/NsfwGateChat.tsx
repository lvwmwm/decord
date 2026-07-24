// Module ID: 11722
// Function ID: 90960
// Name: NsfwGateChat
// Dependencies: [31, 27, 33, 4130, 689, 11723, 4126, 1212, 2]
// Exports: default

// Module 11722 (NsfwGateChat)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.border = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.description = { marginTop: 16, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
const result = require("jsxProd").fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { style: tmp.border };
  const items = [callback(closure_3, obj), ];
  obj = { style: tmp.container };
  const items1 = [callback(closure_4, { source: importDefault(11723) }), ];
  const obj2 = { style: tmp.description, variant: "text-md/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.W4Qyxr);
  items1[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items1;
  items[1] = callback2(closure_3, obj);
  obj.children = items;
  return callback2(closure_7, obj);
};
