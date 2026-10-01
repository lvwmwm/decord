// Module ID: 13486
// Function ID: 13487
// Name: GuildBadgeFrog
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeFrog

// Module 13486 (GuildBadgeFrog)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#008456", "#6BE473"];
const primaryTintLuminances = [0.2, 0.5];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#FFB84B", "#FFE361"];
const secondaryTintLuminances = [0.4, 0.8];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFrog.tsx");

export const GuildBadgeFrog = function GuildBadgeFrog(width) {
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
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M13 3V2H10V3H13Z", fill: "white" });
  items[2] = React2(inlineStyles.Path, { d: "M13 7V6H10V7H13Z", fill: "white" });
  items[3] = React2(inlineStyles.Path, { d: "M14 6V3H13V6H14Z", fill: "white" });
  items[4] = React2(inlineStyles.Path, { d: "M10 6V3H9V6H10Z", fill: "white" });
  items[5] = React2(inlineStyles.Path, { d: "M6 3V2H3V3H6Z", fill: "white" });
  items[6] = React2(inlineStyles.Path, { d: "M6 7V6H3V7H6Z", fill: "white" });
  items[7] = React2(inlineStyles.Path, { d: "M7 6V3H6V6H7Z", fill: "white" });
  items[8] = React2(inlineStyles.Path, { d: "M3 6V3H2V6H3Z", fill: "white" });
  const obj5 = { d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z", fill: secondaryColorsTransformed[1] };
  items[9] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M12 13H4V14H12V13Z", fill: secondaryColorsTransformed[0] };
  items[10] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M13 13V12H12V13H13Z", fill: secondaryColorsTransformed[0] };
  items[11] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M4 13V12H3.00001V13H4Z", fill: secondaryColorsTransformed[0] };
  items[12] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M14 13V12H13V13H14Z", fill: primaryColorsTransformed[0] };
  items[13] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: primaryColorsTransformed[0] };
  items[14] = React2(inlineStyles.Path, obj10);
  const obj11 = { d: "M15 11H14V12H15V11Z", fill: primaryColorsTransformed[0] };
  items[15] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M2 11H1V12H2V11Z", fill: primaryColorsTransformed[0] };
  items[16] = React2(inlineStyles.Path, obj12);
  items[17] = React2(inlineStyles.Path, { d: "M14 14V13H12V14H14Z", fill: "black" });
  items[18] = React2(inlineStyles.Path, { d: "M9 3V2H7V3H9Z", fill: "black" });
  items[19] = React2(inlineStyles.Path, { d: "M13 2V1L9 1V2H13Z", fill: "black" });
  items[20] = React2(inlineStyles.Path, { d: "M7 2V1L3 1V2H7Z", fill: "black" });
  items[21] = React2(inlineStyles.Path, { d: "M4 14V13H2V14H4Z", fill: "black" });
  items[22] = React2(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" });
  items[23] = React2(inlineStyles.Path, { d: "M14 2H13V3H14V2Z", fill: "black" });
  items[24] = React2(inlineStyles.Path, { d: "M3 2H2V3H3V2Z", fill: "black" });
  items[25] = React2(inlineStyles.Path, { d: "M2 12H1V13H2V12Z", fill: "black" });
  items[26] = React2(inlineStyles.Path, { d: "M12 14H4V15H12V14Z", fill: "black" });
  items[27] = React2(inlineStyles.Path, { d: "M16 12V6.99998H15V12H16Z", fill: "black" });
  items[28] = React2(inlineStyles.Path, { d: "M15 7V3H14V7H15Z", fill: "black" });
  items[29] = React2(inlineStyles.Path, { d: "M2 7L2 3H1L1 7H2Z", fill: "black" });
  items[30] = React2(inlineStyles.Path, { d: "M1 12L1 6.99998H0L0 12H1Z", fill: "black" });
  items[31] = React2(inlineStyles.Path, { d: "M13 6V3H10V6H13Z", fill: "black" });
  items[32] = React2(inlineStyles.Path, { d: "M6 6V3H3V6H6Z", fill: "black" });
  items[33] = React2(inlineStyles.Path, { d: "M13 9H3V10H13V9Z", fill: "black" });
  items[34] = React2(inlineStyles.Path, { d: "M14 8H13V9H14V8Z", fill: "black" });
  items[35] = React2(inlineStyles.Path, { d: "M7 7H6V8H7V7Z", fill: "black" });
  items[36] = React2(inlineStyles.Path, { d: "M10 7H9V8H10V7Z", fill: "black" });
  items[37] = React2(inlineStyles.Path, { d: "M3 8H2V9H3V8Z", fill: "black" });
  return _false(Svg, obj3);
};
