// Module ID: 13235
// Function ID: 13236
// Name: BadgeColors
// Dependencies: [19, 17, 21, 4189, 712, 4185, 2]
// Exports: TextBadge

// Module 13235 (BadgeColors)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { base: null, danger: null, info: null, brand: null };
createCacheKey = { borderRadius: require("Themes").radii.sm, paddingHorizontal: 4, paddingVertical: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BADGE_NOTIFICATION_BACKGROUND };
const obj1 = { backgroundColor: require("Themes").colors.BADGE_NOTIFICATION_BACKGROUND };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_260 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { text: { textAlign: "center", textTransform: "uppercase" }, dangerText: null, infoText: null, brandText: null };
const obj3 = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_260 };
obj4[1] = { color: require("Themes").colors.WHITE };
createCacheKey = { color: require("Themes").colors.WHITE };
obj4[2] = createCacheKey;
const obj5 = { color: require("Themes").colors.WHITE };
obj4[3] = { color: require("Themes").unsafe_rawColors.BRAND_560 };
let closure_5 = createCacheKey.createStyles(obj4);
const obj8 = { DANGER: "danger", INFO: "info", BRAND: "brand", NORMAL: "normal" };
const obj7 = { color: require("Themes").unsafe_rawColors.BRAND_560 };
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
  const tmp2 = createCacheKey();
  const tmp3 = callback();
  const obj = { style: items, children: null };
  items = [tmp2.base, tmp2[DANGER], style];
  const items1 = [tmp3.text, tmp3["" + DANGER + "Text"], textStyle];
  obj[1] = jsx(require(4185) /* Text */.Text, { variant: "text-xs/bold", style: items1, children: text });
  return <View style={items}>{null}</View>;
};
