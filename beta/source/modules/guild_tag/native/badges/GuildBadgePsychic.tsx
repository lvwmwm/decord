// Module ID: 13478
// Function ID: 13479
// Name: GuildBadgePsychic
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgePsychic

// Module 13478 (GuildBadgePsychic)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#7fb134", "#bcef42", "#f0f0f0"];
const secondaryBaseColors = ["#816bee", "#b79cf8"];
const primaryTintLuminances = [0.1, 0.6, 0.95];
let items = [{ base: 8, tint: 1 }, { base: 4, tint: 1 }, { base: 8, tint: 1 }];
const secondaryTintLuminances = [0.1, 0.3];
const items1 = [{ base: 8, tint: 1 }, { base: 6, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgePsychic.tsx");

export const GuildBadgePsychic = function GuildBadgePsychic(width) {
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
  items = [, , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M14 4V3h-1V2h-1V1H6v1H4v1H3v1H2v2H1v5h1v1h1v1h1v1h1v1h5v-1h2v-1h1v-1h1v-2h1V4h-1Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  const obj5 = { d: "M15 1h-2v1h2V1Z", fill: primaryColorsTransformed[2] };
  items[1] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M3 13H1v1h2v-1Z", fill: primaryColorsTransformed[1] };
  items[2] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M4 14H1v1h3v-1Z", fill: primaryColorsTransformed[0] };
  items[3] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M15 8h-1v2h1V8Z", fill: secondaryColorsTransformed[0] };
  items[4] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M12 1H6v1h6V1Z", fill: primaryColorsTransformed[2] };
  items[5] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M12 2H6v1h6V2Z", fill: secondaryColorsTransformed[1] };
  items[6] = React2(inlineStyles.Path, obj10);
  const obj11 = { d: "M10 14H5v1h5v-1Z", fill: secondaryColorsTransformed[0] };
  items[7] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M15 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] };
  items[8] = React2(inlineStyles.Path, obj12);
  const obj13 = { d: "M6 5H5v1h1V5ZM3 4H2v1h1V4ZM4 3H3v1h1V3Z", fill: primaryColorsTransformed[2] };
  items[9] = React2(inlineStyles.Path, obj13);
  const obj14 = { d: "M6 3H5v1h1V3ZM13 3h-1v1h1V3Z", fill: secondaryColorsTransformed[1] };
  items[10] = React2(inlineStyles.Path, obj14);
  const obj15 = { d: "M5 2H4v1h1V2ZM7 6H6v1h1V6ZM2 12H1v1h1v-1Z", fill: primaryColorsTransformed[2] };
  items[11] = React2(inlineStyles.Path, obj15);
  const obj16 = { d: "M14 11h-1v1h1v-1ZM13 12h-1v1h1v-1ZM12 13h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] };
  items[12] = React2(inlineStyles.Path, obj16);
  items[13] = React2(inlineStyles.Path, { d: "M15 1v2h-1V2h-1v1h1v1h1v6h1V1h-1ZM3 3H2v1h1V3ZM4 2h2V1H4v1H3v1h1V2ZM15 10h-1v2h1v-2ZM2 4H1v2h1V4ZM12 14h-2v1h2v-1ZM14 12h-1v1h1v-1ZM3 12H2v1h1v-1ZM4 13H3v1h1v-1ZM2 11H1v1h1v-1ZM13 13h-1v1h1v-1ZM1 6H0v9h1V6Z", fill: "#000" });
  items[14] = React2(inlineStyles.Path, { d: "M12 2h1V1h2V0H6v1h6v1ZM5 15v-1H4v1H1v1h9v-1H5Z", fill: "#000" });
  const obj17 = { d: "M2 6H1v2h1V6Z", fill: primaryColorsTransformed[2] };
  items[15] = React2(inlineStyles.Path, obj17);
  const obj18 = { d: "M10 6H8v1h2V6ZM9 10H7v1h2v-1ZM11 7h-1v2h1V7ZM3 11h2v-1H4V5H3v6ZM11 4H7v1h4V4ZM10 12H6v1h4v-1ZM15 5h-1v3h1V5ZM2 8H1v3h1V8ZM5 4H4v1h1V4ZM8 7H7v1h1V7ZM7 9H6v1h1V9ZM6 11H5v1h1v-1ZM10 9H9v1h1V9ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM7 6V5H6v1H5v3h1V6h1ZM14 4h-1v1h1V4ZM12 5h-1v1h1V5ZM13 6h-1v4h1V6ZM3 11H2v1h1v-1ZM4 12H3v1h1v-1ZM5 13H4v1h1v-1Z", fill: secondaryColorsTransformed[1] };
  items[16] = React2(inlineStyles.Path, obj18);
  return _false(Svg, obj3);
};
