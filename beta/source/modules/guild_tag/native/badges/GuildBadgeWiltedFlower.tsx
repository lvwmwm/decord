// Module ID: 13498
// Function ID: 13499
// Name: GuildBadgeWiltedFlower
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeWiltedFlower

// Module 13498 (GuildBadgeWiltedFlower)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#480733", "#800E6F", "#E011AC"];
const primaryTintLuminances = [0.1, 0.3, 0.55];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#096A4C", "#2DC92D"];
const secondaryTintLuminances = [0.25, 0.55];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWiltedFlower.tsx");

export const GuildBadgeWiltedFlower = function GuildBadgeWiltedFlower(width) {
  let primaryColorsTransformed;
  let primaryTintColor;
  let secondaryColorsTransformed;
  let secondaryTintColor;
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  ({ primaryTintColor, secondaryTintColor } = width);
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  const obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj2);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  let tmp9;
  const Path = inlineStyles.Path;
  const tmp6 = _false;
  if (secondaryColorsTransformed != null) {
    tmp9 = secondaryColorsTransformed[1];
  }
  if (tmp9 == null) {
    tmp9 = tmp4[1];
  }
  items = [React2(Path, { d: "M2 12h1v1h1v1h1v-1h1v1h1v1H3v-1H2v-1H1V10h1v2Zm3 1h-1v-1h1v1ZM11 2H6v1h-1v1h-1v8h-1V3h1V2h1V1h6v1Z", fill: tmp9 }), React2(inlineStyles.Path, { d: "M2 10H1v-1h1v1ZM8 10h-1v-1h1v1ZM9 7h-1V4h1v3ZM10 4h-1v-1h1v1Z", fill: "white" }), , , , , , ];
  const obj4 = { d: "M8 11h-1v-1h1v1ZM9 10h-1v-1h1v1ZM14 10h-2v-1h2v1ZM10 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-1v-2h1v2ZM12 6h-1V3h1v3Z", fill: primaryColorsTransformed[0] };
  items[2] = React2(inlineStyles.Path, obj4);
  const obj5 = { d: "M11 9h1v1h-1v1H8v-1h1v-1h1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[3] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M14 10v-1h1v2H12v-1h2ZM11 6h-1v2h-1v1h-1v-2h1V4h1v-1h1v3ZM13 4h1v5h-2v-1h-1v-2h1V3h1v1Z", fill: primaryColorsTransformed[2] };
  items[4] = React2(inlineStyles.Path, obj6);
  let first;
  const Path2 = tmp2(7909).Path;
  if (secondaryColorsTransformed != null) {
    first = secondaryColorsTransformed[0];
  }
  if (first == null) {
    first = tmp4[0];
  }
  items[5] = React2(Path2, { d: "M5 14h-1v-1h1v1ZM4 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM12 3H9V2h3v1Z", fill: first });
  items[6] = React2(inlineStyles.Path, { d: "M2 14h1v1h4v-1h1v2H2v-1H1v-2h1v1Z", fill: "black" });
  items[7] = React2(inlineStyles.Path, { d: "M7 14h-1v-1h1v1ZM3 11H2v-2H1v4H0V7h1v1h1V3h1v8ZM6 13h-1v-1h1v1ZM5 12h-1V4h1v8ZM11 12H7v-1h4v1ZM15 12H12v-1h3v1ZM7 11h-1v-2h1v2ZM12 11h-1v-1h1v1ZM16 11h-1v-2h1v2ZM8 9h-1V4h1v5ZM15 9h-1V4h1v5ZM6 4h-1v-1h1v1ZM9 4h-1v-1h-2V2h3v2ZM14 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM13 3h-1V2h1v1ZM5 2h-1V1h1v1ZM12 2h-1V1h1v1ZM11 1H5V0h6v1Z", fill: "black" });
  return tmp6(Svg, obj3);
};
