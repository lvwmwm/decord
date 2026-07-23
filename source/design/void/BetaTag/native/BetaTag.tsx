// Module ID: 7959
// Function ID: 63488
// Name: BetaTag
// Dependencies: [31, 27, 6671, 33, 4130, 689, 4554, 668, 4126, 1212, 2]
// Exports: default

// Module 7959 (BetaTag)
import "result";
import { View } from "get ActivityIndicator";
import { Gradients } from "items";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginLeft: 8, paddingHorizontal: 8, justifyContent: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textTransform: "uppercase" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { SMALL: "small", MEDIUM: "medium" };
const result = require("items").fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default function BetaTag(gradient) {
  let size;
  let style;
  let textStyle;
  ({ style, textStyle, size } = gradient);
  if (size === undefined) {
    size = obj1.MEDIUM;
  }
  let flag = gradient.gradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = _createForOfIteratorHelperLoose();
  let str = "text-xs/bold";
  if (obj1.SMALL !== size) {
    if (obj1.MEDIUM === size) {
      str = "text-sm/bold";
    }
  }
  if (flag) {
    let obj = {};
    const items = [tmp2.container, style];
    obj.style = items;
    obj.start = require(668) /* keys */.HorizontalGradient.START;
    obj.end = require(668) /* keys */.HorizontalGradient.END;
    obj.colors = Gradients.PREMIUM_TIER_2_TRI_COLOR;
    obj = { variant: str, color: "text-overlay-light" };
    const items1 = [tmp2.text, textStyle];
    obj.style = items1;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.children = intl2.string(require(1212) /* getSystemLocale */.t.oW0eUd);
    obj.children = tmp4(require(4126) /* Text */.Text, obj);
    let tmp4Result = tmp4(importDefault(4554), obj);
    const tmp11 = importDefault(4554);
  } else {
    obj = {};
    const items2 = [tmp2.container, style];
    obj.style = items2;
    obj1 = { variant: str, color: "text-overlay-light" };
    const items3 = [tmp2.text, textStyle];
    obj1.style = items3;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t.oW0eUd);
    obj.children = tmp4(require(4126) /* Text */.Text, obj1);
    tmp4Result = tmp4(View, obj);
  }
  return tmp4Result;
};
export const BetaSizes = obj1;
