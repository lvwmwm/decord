// Module ID: 10349
// Function ID: 79869
// Name: ActionSheetIconHeader
// Dependencies: [31, 27, 33, 4130, 4126, 2]
// Exports: ActionSheetIconHeader

// Module 10349 (ActionSheetIconHeader)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingVertical: 0, flexDirection: "row", alignItems: "center", gap: 12 }, titles: { justifyContent: "center", flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Sheet/native/ActionSheetIconHeader.native.tsx");

export const ActionSheetIconHeader = function ActionSheetIconHeader(subtitle) {
  let icon;
  let title;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = callback2();
  let obj = { style: tmp.container };
  const items = [callback(View, { children: icon }), ];
  obj = { style: tmp.titles };
  obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: title };
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp4 = null;
  if (null != subtitle) {
    const obj1 = { variant: "text-xs/medium", color: "text-default", children: subtitle };
    tmp4 = callback(require(4126) /* Text */.Text, obj1);
  }
  items1[1] = tmp4;
  obj.children = items1;
  items[1] = closure_4(View, obj);
  obj.children = items;
  return closure_4(View, obj);
};
