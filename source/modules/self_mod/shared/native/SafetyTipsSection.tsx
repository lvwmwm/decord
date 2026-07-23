// Module ID: 10154
// Function ID: 78526
// Name: SafetyTipsContainer
// Dependencies: [31, 27, 33, 4130, 689, 4541, 5807, 4126, 1212, 7562, 2]
// Exports: default

// Module 10154 (SafetyTipsContainer)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { image: { alignSelf: "center", justifySelf: "center" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
_createForOfIteratorHelperLoose.tips = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(safetyTips) {
  safetyTips = safetyTips.safetyTips;
  let showHeader = safetyTips.showHeader;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { spacing: 16 };
  obj = { style: tmp.image, children: callback(safetyTips(5807).SafetyBookletSpotIllustration, {}) };
  const items = [callback(View, obj), , ];
  obj = { spacing: 8, align: "center", justify: "center" };
  if (showHeader) {
    const obj1 = { style: tmp.text, variant: "heading-xl/semibold" };
    const intl = safetyTips(1212).intl;
    obj1.children = intl.string(safetyTips(1212).t.eAbVfS);
    showHeader = callback(safetyTips(4126).Text, obj1);
  }
  const items1 = [showHeader, ];
  const obj2 = { style: tmp.text, accessibilityRole: "header", variant: "text-md/medium", color: "text-default", children: safetyTips.description };
  items1[1] = callback(safetyTips(4126).Text, obj2);
  obj.children = items1;
  items[1] = closure_5(safetyTips(4541).Stack, obj);
  items[2] = callback(View, { style: tmp.tips, children: safetyTips.map((tip) => outer1_4(outer1_1(outer1_2[9]), { index: arg1 + 1, tip, end: arg1 === safetyTips.length - 1 }, arg1)) });
  obj.children = items;
  return closure_5(safetyTips(4541).Stack, obj);
};
