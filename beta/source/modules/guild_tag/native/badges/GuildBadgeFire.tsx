// Module ID: 13471
// Function ID: 13472
// Name: GuildBadgeFire
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeFire

// Module 13471 (GuildBadgeFire)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#ba3500", "#fd6214", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.3, 1];
let items = [{ base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 10, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFire.tsx");

export const GuildBadgeFire = function GuildBadgeFire(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const primaryTintColor = width.primaryTintColor;
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  const obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj2).primaryColorsTransformed;
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  items = [, , , , , , , , , , ];
  const obj4 = { d: "M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z", fill: "#000" });
  const obj5 = { d: "M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z", fill: primaryColorsTransformed[0] };
  items[2] = React2(inlineStyles.Path, obj5);
  items[3] = React2(inlineStyles.Path, { d: "M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z", fill: "#000" });
  const obj6 = { d: "M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z", fill: primaryColorsTransformed[2] };
  items[4] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M5 4v1h1V4H5Z", fill: primaryColorsTransformed[1] };
  items[5] = React2(inlineStyles.Path, obj7);
  items[6] = React2(inlineStyles.Path, { opacity: 0.5, d: "M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z", fill: "#fff" });
  const obj8 = { d: "M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z", fill: primaryColorsTransformed[2] };
  items[7] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] };
  items[8] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z", fill: primaryColorsTransformed[2] };
  items[9] = React2(inlineStyles.Path, obj10);
  items[10] = React2(inlineStyles.Path, { d: "M12 1v3h1V1h-1Z", fill: "#000" });
  return _false(Svg, obj3);
};
