// Module ID: 13461
// Function ID: 13462
// Name: GuildBadgeSword
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeSword

// Module 13461 (GuildBadgeSword)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const secondaryBaseColors = ["#847d8b", "#d1cdd5", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.4, 0.7];
let items = [{ base: 5, tint: 1 }, { base: 4, tint: 1 }, { base: 3, tint: 1 }];
const secondaryTintLuminances = [0.3, 0.9, 1];
const items1 = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 8, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSword.tsx");

export const GuildBadgeSword = function GuildBadgeSword(width) {
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
  items = [, , , , , , , , , , , , , , , ];
  const obj4 = { d: "M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z", fill: secondaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  const obj5 = { d: "M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z", fill: primaryColorsTransformed[1] };
  items[1] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z", fill: primaryColorsTransformed[1] };
  items[2] = React2(inlineStyles.Path, obj6);
  items[3] = React2(inlineStyles.Path, { d: "M11 1h-1v1h1V1ZM10 2H9v1h1V2ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM7 5H6v2h1V5ZM5 5H4v2h1V5ZM2 5H1v2h1V5ZM3 7H2v2h1V7ZM11 9H9v1h2V9ZM11 11H9v1h2v-1ZM12 12h-1v2h1v-2Z", fill: "#000" });
  const obj7 = { d: "M15 1h-1v4h1V1Z", fill: secondaryColorsTransformed[0] };
  items[4] = React2(inlineStyles.Path, obj7);
  items[5] = React2(inlineStyles.Path, { d: "M1 13H0v2h1v-2ZM11 14H9v1h2v-1ZM9 13H7v1h2v-1Z", fill: "#000" });
  const obj8 = { d: "M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z", fill: primaryColorsTransformed[0] };
  items[6] = React2(inlineStyles.Path, obj8);
  items[7] = React2(inlineStyles.Path, { d: "M3 14v1h1v-1h1v-1H3v1ZM6 12v-2H4V9H3v2h2v2h2v-1H6ZM3 12v-1H2v1H1v1h2v-1ZM3 15H1v1h2v-1ZM4 4H2v1h2V4ZM7 9v1h1V8H6v1h1Z", fill: "#000" });
  const obj9 = { d: "M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z", fill: secondaryColorsTransformed[0] };
  items[8] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M7 7H6v1h1V7Z", fill: secondaryColorsTransformed[2] };
  items[9] = React2(inlineStyles.Path, obj10);
  const obj11 = { d: "M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z", fill: primaryColorsTransformed[0] };
  items[10] = React2(inlineStyles.Path, obj11);
  items[11] = React2(inlineStyles.Path, { d: "M9 10H8v1h1v-1ZM6 7H5v1h1V7ZM15 5h-1v1h1V5ZM14 6h-1v1h1V6ZM13 7h-1v1h1V7ZM12 8h-1v1h1V8ZM11 0v1h4v4h1V0h-5Z", fill: "#000" });
  const obj12 = { d: "M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z", fill: primaryColorsTransformed[2] };
  items[12] = React2(inlineStyles.Path, obj12);
  const obj13 = { d: "M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z", fill: secondaryColorsTransformed[2] };
  items[13] = React2(inlineStyles.Path, obj13);
  const obj14 = { d: "M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z", fill: secondaryColorsTransformed[0] };
  items[14] = React2(inlineStyles.Path, obj14);
  const obj15 = { d: "M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] };
  items[15] = React2(inlineStyles.Path, obj15);
  return _false(Svg, obj3);
};
