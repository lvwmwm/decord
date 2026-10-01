// Module ID: 13490
// Function ID: 13491
// Name: GuildBadgeCrown
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeCrown

// Module 13490 (GuildBadgeCrown)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#FFB84B", "#FFE361"];
const primaryTintLuminances = [0.56, 0.77];
let items = [{ base: 3, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#FF1C90", "#FF7FC0"];
const secondaryTintLuminances = [0.2, 0.4];
const items1 = [{ base: 7, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCrown.tsx");

export const GuildBadgeCrown = function GuildBadgeCrown(width) {
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
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M0.999985 2V14H1.99998V15H14V14H15V2H14V3H13V4H11V3H9.99998V2H8.99998V1H6.99998V2H5.99998V3H4.99998V4H2.99998V3H1.99998V2H0.999985Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M0.999985 3H1.99998L1.99998 2L0.999985 2L0.999985 3Z", fill: "white" });
  items[2] = React2(inlineStyles.Path, { d: "M1.99998 4H2.99998V3H1.99998V4Z", fill: "white" });
  items[3] = React2(inlineStyles.Path, { d: "M4.99998 4H5.99998V3H4.99998V4Z", fill: "white" });
  items[4] = React2(inlineStyles.Path, { d: "M9.99998 4H11V3H9.99998V4Z", fill: "white" });
  items[5] = React2(inlineStyles.Path, { d: "M9 2.00002V1.00002H7V2.00002H6V3.00002H7V5.00002H9V3.00002H10V2.00002H9Z", fill: "white" });
  items[6] = React2(inlineStyles.Path, { d: "M2 5.00002V4.00002H1V13H2V14H3V5.00002H2Z", fill: "white" });
  const obj5 = { d: "M13 5.00002V4.00002H14V15H12V5.00002H13Z", fill: primaryColorsTransformed[0] };
  items[7] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M4.99999 5.00002H3V15H4.99999V5.00002Z", fill: primaryColorsTransformed[0] };
  items[8] = React2(inlineStyles.Path, obj6);
  items[9] = React2(inlineStyles.Path, { d: "M6.99998 15H8.99998V13H6.99998V15Z", fill: "white" });
  const obj7 = { d: "M10 7.00002V6.00002H9V5.00002H7V6.00002H6V7.00002H5V8.00001H6V11H7V12H9V11H10V8.00001H11V7.00002H10Z", fill: secondaryColorsTransformed[0] };
  items[10] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M6.99998 12H8.99998V10H6.99998V12Z", fill: secondaryColorsTransformed[1] };
  items[11] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M9 7.00002V6.00002H7V7.00002H6V9.00001H10V7.00002H9Z", fill: secondaryColorsTransformed[1] };
  items[12] = React2(inlineStyles.Path, obj9);
  items[13] = React2(inlineStyles.Path, { d: "M6.99998 9.00002H8.99998V7.00002H6.99998V9.00002Z", fill: "white" });
  items[14] = React2(inlineStyles.Path, { d: "M0.999985 15H1.99998L1.99998 14H0.999985L0.999985 15Z", fill: "black" });
  items[15] = React2(inlineStyles.Path, { d: "M1.99998 3H2.99998V2L1.99998 2V3Z", fill: "black" });
  items[16] = React2(inlineStyles.Path, { d: "M4.99998 3H5.99998V2L4.99998 2V3Z", fill: "black" });
  items[17] = React2(inlineStyles.Path, { d: "M5.99998 2L6.99998 2V1L5.99998 1V2Z", fill: "black" });
  items[18] = React2(inlineStyles.Path, { d: "M6.99998 1L8.99998 1V0L6.99998 0V1Z", fill: "black" });
  items[19] = React2(inlineStyles.Path, { d: "M2.99998 4L4.99998 4V3H2.99998V4Z", fill: "black" });
  items[20] = React2(inlineStyles.Path, { d: "M8.99998 2L9.99998 2V1L8.99998 1V2Z", fill: "black" });
  items[21] = React2(inlineStyles.Path, { d: "M9.99998 3H11V2L9.99998 2V3Z", fill: "black" });
  items[22] = React2(inlineStyles.Path, { d: "M13 3H14V2L13 2V3Z", fill: "black" });
  items[23] = React2(inlineStyles.Path, { d: "M11 4L13 4V3H11V4Z", fill: "black" });
  items[24] = React2(inlineStyles.Path, { d: "M14 15H15V14H14V15Z", fill: "black" });
  items[25] = React2(inlineStyles.Path, { d: "M1 1.00002V1.52588e-05H0V14H1V2.00002H2V1.00002H1Z", fill: "black" });
  items[26] = React2(inlineStyles.Path, { d: "M15 1.52588e-05V1.00002H14V2.00002H15V14H16V1.52588e-05H15Z", fill: "black" });
  items[27] = React2(inlineStyles.Path, { d: "M14 15H1.99998V16H14V15Z", fill: "black" });
  items[28] = React2(inlineStyles.Path, { d: "M6.99998 13H8.99998V12H6.99998V13Z", fill: "black" });
  items[29] = React2(inlineStyles.Path, { d: "M8.99998 12H9.99998V11H8.99998V12Z", fill: "black" });
  items[30] = React2(inlineStyles.Path, { d: "M5.99998 12H6.99998V11H5.99998V12Z", fill: "black" });
  items[31] = React2(inlineStyles.Path, { d: "M4.99998 11H5.99998V8H4.99998V11Z", fill: "black" });
  items[32] = React2(inlineStyles.Path, { d: "M9.99998 11H11V8H9.99998V11Z", fill: "black" });
  return _false(Svg, obj3);
};
