// Module ID: 13491
// Function ID: 13492
// Name: GuildBadgeTrophy
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeTrophy

// Module 13491 (GuildBadgeTrophy)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#FD6214", "#FFB84B", "#FFE361"];
const primaryTintLuminances = [0.3, 0.56, 0.77];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeTrophy.tsx");

export const GuildBadgeTrophy = function GuildBadgeTrophy(width) {
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
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z", fill: primaryColorsTransformed[2] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M12 15H3.99998V16H12V15Z", fill: "black" });
  const obj5 = { d: "M12 14H3.99998V15H12V14Z", fill: primaryColorsTransformed[1] };
  items[2] = React2(inlineStyles.Path, obj5);
  items[3] = React2(inlineStyles.Path, { d: "M13 13H12V15H13V13Z", fill: "black" });
  items[4] = React2(inlineStyles.Path, { d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z", fill: "black" });
  items[5] = React2(inlineStyles.Path, { d: "M3.99998 13H2.99998V15H3.99998V13Z", fill: "black" });
  items[6] = React2(inlineStyles.Path, { d: "M5 10V11H6V12H4V13H7V10H5Z", fill: "black" });
  items[7] = React2(inlineStyles.Path, { d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z", fill: "black" });
  items[8] = React2(inlineStyles.Path, { d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z", fill: "white" });
  const obj6 = { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: primaryColorsTransformed[0] };
  items[9] = React2(inlineStyles.Path, obj6);
  items[10] = React2(inlineStyles.Path, { d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z", fill: "black" });
  items[11] = React2(inlineStyles.Path, { d: "M12 6.99998H13V3.99998H12V6.99998Z", fill: "black" });
  const obj7 = { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: primaryColorsTransformed[1] };
  items[12] = React2(inlineStyles.Path, obj7);
  items[13] = React2(inlineStyles.Path, { d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z", fill: "black" });
  const obj8 = { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: primaryColorsTransformed[1] };
  items[14] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: primaryColorsTransformed[1] };
  items[15] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: primaryColorsTransformed[0] };
  items[16] = React2(inlineStyles.Path, obj10);
  const obj11 = { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: primaryColorsTransformed[1] };
  items[17] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: primaryColorsTransformed[0] };
  items[18] = React2(inlineStyles.Path, obj12);
  const obj13 = { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: primaryColorsTransformed[1] };
  items[19] = React2(inlineStyles.Path, obj13);
  const obj14 = { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: primaryColorsTransformed[0] };
  items[20] = React2(inlineStyles.Path, obj14);
  const obj15 = { d: "M11 2H10V6.99999H11V2Z", fill: primaryColorsTransformed[1] };
  items[21] = React2(inlineStyles.Path, obj15);
  const obj16 = { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: primaryColorsTransformed[2] };
  items[22] = React2(inlineStyles.Path, obj16);
  items[23] = React2(inlineStyles.Path, { d: "M14 3.99998V2.99998H12V3.99998H14Z", fill: "white" });
  items[24] = React2(inlineStyles.Path, { d: "M8 10H7V12H8V10Z", fill: "white" });
  items[25] = React2(inlineStyles.Path, { d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z", fill: "black" });
  const obj17 = { d: "M3 7V4H2V8H4V7H3Z", fill: primaryColorsTransformed[1] };
  items[26] = React2(inlineStyles.Path, obj17);
  items[27] = React2(inlineStyles.Path, { d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z", fill: "black" });
  items[28] = React2(inlineStyles.Path, { d: "M10 12V11H11V10H9V13H12V12H10Z", fill: "black" });
  items[29] = React2(inlineStyles.Path, { d: "M14 8.99998V7.99998H12V8.99998H14Z", fill: "black" });
  items[30] = React2(inlineStyles.Path, { d: "M16 3.99998H15V6.99998H16V3.99998Z", fill: "black" });
  const obj18 = { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: primaryColorsTransformed[1] };
  items[31] = React2(inlineStyles.Path, obj18);
  items[32] = React2(inlineStyles.Path, { d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", fill: "black" });
  items[33] = React2(inlineStyles.Path, { d: "M11 9.99998H12V8.99998H11V9.99998Z", fill: "black" });
  items[34] = React2(inlineStyles.Path, { d: "M14 7.99998H15V6.99998H14V7.99998Z", fill: "black" });
  items[35] = React2(inlineStyles.Path, { d: "M14 3.99998H15V2.99998H14V3.99998Z", fill: "black" });
  items[36] = React2(inlineStyles.Path, { d: "M7 13H4V14H7V13Z", fill: "white" });
  items[37] = React2(inlineStyles.Path, { d: "M4 1V8H5V2H6V7H7V2H12V1H4Z", fill: "white" });
  return _false(Svg, obj3);
};
