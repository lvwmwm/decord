// Module ID: 14835
// Function ID: 113202
// Name: HomeDrawerSharedItem
// Dependencies: [31, 27, 33, 4130, 2]
// Exports: HomeDrawerSharedItem

// Module 14835 (HomeDrawerSharedItem)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_1;
let closure_2;
({ jsxs: closure_1, jsx: closure_2 } = jsxProd);
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }, titleContainer: { flex: 1, flexDirection: "column", justifyContent: "center", gap: 2 }, rightContainer: { overflow: "hidden" } });
const result = require("jsxProd").fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = function HomeDrawerSharedItem(right) {
  let subtitle;
  let title;
  right = right.right;
  ({ title, subtitle } = right);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.titleContainer, children: items };
  items = [title, subtitle];
  const items1 = [callback(View, obj), ];
  let tmp4 = null;
  if (null != right) {
    obj = { style: tmp.rightContainer, children: right };
    tmp4 = callback2(View, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return callback(View, obj);
};
