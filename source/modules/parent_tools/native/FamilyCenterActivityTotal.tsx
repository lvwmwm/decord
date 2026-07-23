// Module ID: 13798
// Function ID: 105739
// Name: FamilyCenterActivityTotal
// Dependencies: [31, 27, 33, 4130, 689, 13797, 6828, 4126, 2]
// Exports: default

// Module 13798 (FamilyCenterActivityTotal)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, padding: 12, justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LEDGE);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default function FamilyCenterActivityTotal(displayType) {
  displayType = displayType.displayType;
  let obj = require(13797) /* useActionTotalsForDisplayType */;
  const actionTotalsForDisplayType = obj.useActionTotalsForDisplayType(displayType);
  let obj1 = require(13797) /* useActionTotalsForDisplayType */;
  const formattedTotalForDisplayType = obj1.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const tmp = _createForOfIteratorHelperLoose();
  const activityTypeTextConfigs = require(6828) /* getActivityTypeTextConfigs */.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  let tooltipHeaderResult;
  if (null != value) {
    tooltipHeaderResult = value.tooltipHeader();
  }
  obj = { style: tmp.container };
  obj = { variant: "heading-xxl/medium", color: str };
  let num = 0;
  if (null != formattedTotalForDisplayType) {
    num = formattedTotalForDisplayType;
  }
  obj.children = num;
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj1 = { variant: "text-sm/semibold", children: tooltipHeaderResult };
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return closure_4(View, obj);
};
