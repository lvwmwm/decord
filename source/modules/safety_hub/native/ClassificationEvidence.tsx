// Module ID: 11034
// Function ID: 85892
// Name: ClassificationEvidence
// Dependencies: [31, 27, 33, 4130, 1273, 689, 4126, 1212, 11035, 2]
// Exports: default

// Module 11034 (ClassificationEvidence)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose.cardShadow = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
_createForOfIteratorHelperLoose = { borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CHANNELTEXTAREA_BACKGROUND, padding: 20 };
_createForOfIteratorHelperLoose.flaggedContent = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sectionContainer = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/ClassificationEvidence.tsx");

export default function ClassificationEvidence(flaggedContent) {
  flaggedContent = flaggedContent.flaggedContent;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = null;
  if (0 !== flaggedContent.length) {
    let obj = { style: tmp.sectionContainer };
    obj = { variant: "eyebrow", color: "text-default" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.s64CMg);
    const items = [callback(require(4126) /* Text */.Text, obj), ];
    obj = {};
    const items1 = [, ];
    ({ flaggedContent: arr3[0], cardShadow: arr3[1] } = tmp);
    obj.style = items1;
    const obj1 = { flaggedContent };
    obj.children = callback(importDefault(11035), obj1);
    items[1] = callback(View, obj);
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
