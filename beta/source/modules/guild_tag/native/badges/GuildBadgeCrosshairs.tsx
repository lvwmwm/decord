// Module ID: 13473
// Function ID: 13474
// Name: GuildBadgeCrosshairs
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeCrosshairs

// Module 13473 (GuildBadgeCrosshairs)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#3f581a", "#7fb134", "#bcef42", "#f0f0f0"];
const secondaryBaseColors = ["#008456", "#6be473", "#f0f0f0"];
const primaryTintLuminances = [0.05, 0.35, 0.7, 1];
let items = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 2, tint: 1 }, { base: 4, tint: 1 }];
const secondaryTintLuminances = [0.15, 0.6, 1];
const items1 = [{ base: 3, tint: 1 }, { base: 2, tint: 1 }, { base: 4, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCrosshairs.tsx");

export const GuildBadgeCrosshairs = function GuildBadgeCrosshairs(width) {
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
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M9 1H7v4h2V1ZM11 7V6h-1V5H6v1H5v1H1v2h4v1h1v1h1v4h2v-4h1v-1h1V9h4V7h-4Z", fill: primaryColorsTransformed[2] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M4 0H3v1h1V0ZM6 5H5v1h1V5ZM11 5h-1v1h1V5ZM13 0h-1v1h1V0ZM14 1h-1v1h1V1ZM15 2h-1v1h1V2ZM16 3h-1v1h1V3ZM9 0H7v1h2V0Z", fill: "#000" });
  const obj5 = { d: "M9 1H7v1h2V1Z", fill: primaryColorsTransformed[3] };
  items[2] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M9 3H7v1h2V3ZM9 4H7v1h2V4Z", fill: primaryColorsTransformed[1] };
  items[3] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M9 12H7v1h2v-1Z", fill: primaryColorsTransformed[3] };
  items[4] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M9 14H7v1h2v-1ZM9 11H7v1h2v-1Z", fill: primaryColorsTransformed[1] };
  items[5] = React2(inlineStyles.Path, obj8);
  items[6] = React2(inlineStyles.Path, { d: "M9 6H7v1h2V6ZM9 9H7v1h2V9ZM10 7H9v2h1V7Z", fill: "#000" });
  const obj9 = { d: "M12 7h-1v2h1V7Z", fill: primaryColorsTransformed[1] };
  items[7] = React2(inlineStyles.Path, obj9);
  items[8] = React2(inlineStyles.Path, { d: "M7 7H6v2h1V7Z", fill: "#000" });
  const obj10 = { d: "M6 6H5v2h1V6Z", fill: primaryColorsTransformed[3] };
  items[9] = React2(inlineStyles.Path, obj10);
  items[10] = React2(inlineStyles.Path, { d: "M3 1H2v1h1V1Z", fill: "#000" });
  const obj11 = { d: "M3 1v1H2v1H1v1h3V1H3Z", fill: secondaryColorsTransformed[1] };
  items[11] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: secondaryColorsTransformed[2] };
  items[12] = React2(inlineStyles.Path, obj12);
  const obj13 = { d: "M4 3H1v1h3V3Z", fill: secondaryColorsTransformed[0] };
  items[13] = React2(inlineStyles.Path, obj13);
  const obj14 = { d: "M12 12v3h1v-1h1v-1h1v-1h-3ZM1 12v1h1v1h1v1h1v-3H1Z", fill: secondaryColorsTransformed[1] };
  items[14] = React2(inlineStyles.Path, obj14);
  const obj15 = { d: "M4 12H1v1h3v-1Z", fill: secondaryColorsTransformed[2] };
  items[15] = React2(inlineStyles.Path, obj15);
  const obj16 = { d: "M3 13v2h1v-2H3Z", fill: secondaryColorsTransformed[0] };
  items[16] = React2(inlineStyles.Path, obj16);
  const obj17 = { d: "M14 3V2h-1V1h-1v3h3V3h-1Z", fill: secondaryColorsTransformed[1] };
  items[17] = React2(inlineStyles.Path, obj17);
  const obj18 = { d: "M13 1h-1v1h1V1Z", fill: secondaryColorsTransformed[2] };
  items[18] = React2(inlineStyles.Path, obj18);
  const obj19 = { d: "M13 7h-1v1h1V7Z", fill: primaryColorsTransformed[3] };
  items[19] = React2(inlineStyles.Path, obj19);
  const obj20 = { d: "M15 8h-3v1h3V8Z", fill: primaryColorsTransformed[1] };
  items[20] = React2(inlineStyles.Path, obj20);
  const obj21 = { d: "M15 3h-3v1h3V3Z", fill: secondaryColorsTransformed[0] };
  items[21] = React2(inlineStyles.Path, obj21);
  items[22] = React2(inlineStyles.Path, { d: "M2 2H1v1h1V2ZM7 1H6v4h1V1ZM10 1H9v4h1V1ZM16 7h-1v2h1V7ZM15 6h-4v1h4V6ZM15 9h-4v1h4V9ZM1 7H0v2h1V7ZM5 6H1v1h4V6Z", fill: "#000" });
  const obj22 = { d: "M4 7H1v2h1V8h2V7Z", fill: primaryColorsTransformed[3] };
  items[23] = React2(inlineStyles.Path, obj22);
  items[24] = React2(inlineStyles.Path, { d: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z", fill: "#000" });
  const obj23 = { d: "M4 8H3v1h1V8ZM5 7H4v2h1V7Z", fill: primaryColorsTransformed[1] };
  items[25] = React2(inlineStyles.Path, obj23);
  const obj24 = { d: "M5 7H4v2h1V7Z", fill: primaryColorsTransformed[0] };
  items[26] = React2(inlineStyles.Path, obj24);
  const obj25 = { d: "M10 10H6v1h4v-1Z", fill: primaryColorsTransformed[1] };
  items[27] = React2(inlineStyles.Path, obj25);
  const obj26 = { d: "M10 5H6v1h4V5Z", fill: primaryColorsTransformed[3] };
  items[28] = React2(inlineStyles.Path, obj26);
  items[29] = React2(inlineStyles.Path, { d: "M11 10h-1v1h1v-1Z", fill: "#000" });
  const obj27 = { d: "M11 9h-1v1h1V9Z", fill: primaryColorsTransformed[1] };
  items[30] = React2(inlineStyles.Path, obj27);
  items[31] = React2(inlineStyles.Path, { d: "M13 15h-1v1h1v-1ZM14 14h-1v1h1v-1ZM15 13h-1v1h1v-1ZM16 12h-1v1h1v-1ZM9 15H7v1h2v-1ZM3 14H2v1h1v-1ZM2 13H1v1h1v-1ZM7 11H6v4h1v-4ZM10 11H9v4h1v-4ZM4 4H1v1h4V1H4v3ZM12 4V1h-1v4h4V4h-3Z", fill: "#000" });
  items[32] = React2(inlineStyles.Path, { d: "M1 11v1h3v3h1v-4H1ZM11 11v4h1v-3h3v-1h-4ZM1 12H0v1h1v-1Z", fill: "#000" });
  const obj28 = { d: "M13 14h-1v1h1v-1ZM14 13h-1v1h1v-1ZM15 12h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] };
  items[33] = React2(inlineStyles.Path, obj28);
  const obj29 = { d: "M13 12h-1v1h1v-1Z", fill: secondaryColorsTransformed[2] };
  items[34] = React2(inlineStyles.Path, obj29);
  const obj30 = { d: "M9 7H7v2h2V7Z", fill: primaryColorsTransformed[1] };
  items[35] = React2(inlineStyles.Path, obj30);
  const obj31 = { d: "M9 4H7v1h2V4ZM9 11H7v1h2v-1ZM12 7h-1v2h1V7Z", fill: primaryColorsTransformed[0] };
  items[36] = React2(inlineStyles.Path, obj31);
  return _false(Svg, obj3);
};
