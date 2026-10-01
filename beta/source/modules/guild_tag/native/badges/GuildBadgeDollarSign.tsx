// Module ID: 13493
// Function ID: 13494
// Name: GuildBadgeDollarSign
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeDollarSign

// Module 13493 (GuildBadgeDollarSign)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#008456", "#6BE473"];
const primaryTintLuminances = [0.17, 0.6];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeDollarSign.tsx");

export const GuildBadgeDollarSign = function GuildBadgeDollarSign(width) {
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
  items = [React2(inlineStyles.Path, { d: "M16 11.9295V9H15V11.9295H16Z", fill: "black" }), React2(inlineStyles.Path, { d: "M16 12V9H15V12H16Z", fill: "black" }), React2(inlineStyles.Path, { d: "M1 7L1 4H0L0 7H1Z", fill: "black" }), , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z", fill: primaryColorsTransformed[1] };
  items[3] = React2(inlineStyles.Path, obj4);
  items[4] = React2(inlineStyles.Path, { d: "M15 12H14V13H15V12Z", fill: "black" });
  items[5] = React2(inlineStyles.Path, { d: "M13 9H12V10H13V9Z", fill: "white" });
  items[6] = React2(inlineStyles.Path, { d: "M12 8H8V9H12V8Z", fill: "white" });
  items[7] = React2(inlineStyles.Path, { d: "M5 3H2V4H5V3Z", fill: "white" });
  items[8] = React2(inlineStyles.Path, { d: "M7 9H6V10H7V9Z", fill: "black" });
  items[9] = React2(inlineStyles.Path, { d: "M8 6H7V7H8V6Z", fill: "black" });
  const obj5 = { d: "M8 5H7V6H8V5Z", fill: primaryColorsTransformed[0] };
  items[10] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M7 10H6V11H7V10Z", fill: primaryColorsTransformed[0] };
  items[11] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M6 9H5V10H6V9Z", fill: primaryColorsTransformed[0] };
  items[12] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M9 6H8V7H9V6Z", fill: primaryColorsTransformed[0] };
  items[13] = React2(inlineStyles.Path, obj8);
  items[14] = React2(inlineStyles.Path, { d: "M2 3H1V4H2V3Z", fill: "black" });
  items[15] = React2(inlineStyles.Path, { d: "M2 4H1V5H2V4Z", fill: "white" });
  items[16] = React2(inlineStyles.Path, { d: "M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z", fill: "black" });
  const obj9 = { d: "M13 3V7H15V3H13Z", fill: primaryColorsTransformed[0] };
  items[17] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M9 1V3H11V1L9 1Z", fill: primaryColorsTransformed[0] };
  items[18] = React2(inlineStyles.Path, obj10);
  const obj11 = { d: "M9 13V15H11V13H9Z", fill: primaryColorsTransformed[0] };
  items[19] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z", fill: primaryColorsTransformed[0] };
  items[20] = React2(inlineStyles.Path, obj12);
  items[21] = React2(inlineStyles.Path, { d: "M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z", fill: "white" });
  items[22] = React2(inlineStyles.Path, { d: "M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z", fill: "white" });
  items[23] = React2(inlineStyles.Path, { d: "M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z", fill: "black" });
  return _false(Svg, obj3);
};
