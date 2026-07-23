// Module ID: 13104
// Function ID: 101038
// Name: BadgeColors
// Dependencies: [31, 27, 33, 4130, 689, 4126, 2]
// Exports: TextBadge

// Module 13104 (BadgeColors)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
_createForOfIteratorHelperLoose.base = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.danger = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_NOTIFICATION_BACKGROUND };
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_NOTIFICATION_BACKGROUND };
_createForOfIteratorHelperLoose.info = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.brand = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_260 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj4 = { text: { textAlign: "center", textTransform: "uppercase" } };
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_260 };
obj4.dangerText = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj4.infoText = _createForOfIteratorHelperLoose;
const obj5 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj4.brandText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_560 };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj4);
const obj8 = { DANGER: "danger", INFO: "info", BRAND: "brand", NORMAL: "normal" };
const obj7 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_560 };
const result = require("jsxProd").fileFinishedImporting("design/void/Badges/native/Badges.tsx");

export const BadgeColors = obj8;
export const TextBadge = function TextBadge(color) {
  let style;
  let text;
  let textStyle;
  let DANGER = color.color;
  if (DANGER === undefined) {
    DANGER = obj8.DANGER;
  }
  ({ style, text, textStyle } = color);
  const tmp2 = _createForOfIteratorHelperLoose();
  const tmp3 = callback();
  const obj = { style: items };
  items = [tmp2.base, tmp2[DANGER], style];
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/bold", style: items1, children: text });
  return <View style={items} />;
};
