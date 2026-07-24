// Module ID: 9279
// Function ID: 72501
// Name: ViewEmptyState
// Dependencies: [31, 27, 653, 33, 4130, 5052, 689, 1273, 2]
// Exports: default

// Module 9279 (ViewEmptyState)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_2, Image: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 36 }, emptyImage: { width: 170, height: 130 }, fixOpticalIllusion: { marginTop: -50, alignItems: "center" } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose["marginTop"] = 32;
_createForOfIteratorHelperLoose["opacity"] = 0.8;
_createForOfIteratorHelperLoose.emptyLabel = _createForOfIteratorHelperLoose;
let obj1 = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 13, marginTop: 8, marginHorizontal: 10, opacity: 0.6, fontWeight: "400" };
_createForOfIteratorHelperLoose.emptyText = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  let label;
  let source;
  let style;
  let text;
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.emptyContainer, style];
  obj = { style: tmp.fixOpticalIllusion };
  obj = { resizeMode: "contain", source, style: tmp.emptyImage };
  const items1 = [callback(closure_3, obj), , ];
  let tmp5 = null;
  if (null != label) {
    const obj1 = { style: tmp.emptyLabel, children: label.toUpperCase() };
    tmp5 = callback(require(1273) /* Button */.LegacyText, obj1);
  }
  items1[1] = tmp5;
  let tmp9 = null;
  if (null != text) {
    const obj2 = {};
    const items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    obj2.style = items2;
    obj2.children = text;
    tmp9 = callback(require(1273) /* Button */.LegacyText, obj2);
  }
  items1[2] = tmp9;
  obj.children = items1;
  obj.children = closure_5(closure_2, obj);
  return callback(closure_2, obj);
};
