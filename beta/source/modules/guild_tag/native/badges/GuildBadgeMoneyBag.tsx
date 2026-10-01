// Module ID: 13492
// Function ID: 13493
// Name: GuildBadgeMoneyBag
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeMoneyBag

// Module 13492 (GuildBadgeMoneyBag)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#FFB84B", "#FFE361"];
const primaryTintLuminances = [0.5, 0.77];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMoneyBag.tsx");

export const GuildBadgeMoneyBag = function GuildBadgeMoneyBag(width) {
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
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M1.99999 15V14H0.999985V9H1.99999V8H2.99999V7H3.99999V6H12V7H13V8H14V9H15V14H14V15H1.99999Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M14 15H1.99999V16H14V15Z", fill: "black" });
  const obj5 = { d: "M3.00002 1V2H4.00002V3H12V2H13V1H3.00002Z", fill: primaryColorsTransformed[1] };
  items[2] = React2(inlineStyles.Path, obj5);
  items[3] = React2(inlineStyles.Path, { d: "M0.999996 15H2V14H0.999996L0.999996 15Z", fill: "black" });
  items[4] = React2(inlineStyles.Path, { d: "M0.999996 9H2V8H0.999996L0.999996 9Z", fill: "black" });
  items[5] = React2(inlineStyles.Path, { d: "M1.99999 9H2.99999V8H1.99999V9Z", fill: "white" });
  items[6] = React2(inlineStyles.Path, { d: "M2.99999 8H3.99999V7H2.99999V8Z", fill: "white" });
  const obj6 = { d: "M3.99999 7H4.99999V6H3.99999V7Z", fill: primaryColorsTransformed[0] };
  items[7] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M11 7H12V6H11V7Z", fill: primaryColorsTransformed[0] };
  items[8] = React2(inlineStyles.Path, obj7);
  items[9] = React2(inlineStyles.Path, { d: "M8.99999 12H9.99999V8H8.99999V12Z", fill: "black" });
  items[10] = React2(inlineStyles.Path, { d: "M5.99999 12H6.99999L6.99999 8H5.99999V12Z", fill: "black" });
  const obj8 = { d: "M14 10H15V9H14V10Z", fill: primaryColorsTransformed[0] };
  items[11] = React2(inlineStyles.Path, obj8);
  items[12] = React2(inlineStyles.Path, { d: "M1.99999 8H2.99999V7H1.99999V8Z", fill: "black" });
  items[13] = React2(inlineStyles.Path, { d: "M2.99999 7H3.99999V6H2.99999V7Z", fill: "black" });
  items[14] = React2(inlineStyles.Path, { d: "M2.99999 3H3.99999V2L2.99999 2V3Z", fill: "black" });
  items[15] = React2(inlineStyles.Path, { d: "M3.99999 2L6.99999 2V1L3.99999 1V2Z", fill: "white" });
  items[16] = React2(inlineStyles.Path, { d: "M0.999985 9L0.999985 12H1.99998L1.99998 9H0.999985Z", fill: "white" });
  items[17] = React2(inlineStyles.Path, { d: "M8.99999 12H6.99999V13H8.99999V12Z", fill: "black" });
  items[18] = React2(inlineStyles.Path, { d: "M8.99999 7H6.99999V8H8.99999V7Z", fill: "black" });
  const obj9 = { d: "M8.99999 8H6.99999V12H8.99999V8Z", fill: primaryColorsTransformed[0] };
  items[19] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M2 14V12H1V14H2Z", fill: primaryColorsTransformed[0] };
  items[20] = React2(inlineStyles.Path, obj10);
  const obj11 = { d: "M15 14V12H14V14H15Z", fill: primaryColorsTransformed[0] };
  items[21] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M1.99999 15L14 15V13L1.99999 13V15Z", fill: primaryColorsTransformed[0] };
  items[22] = React2(inlineStyles.Path, obj12);
  items[23] = React2(inlineStyles.Path, { d: "M0 14H1L1 9H0L0 14Z", fill: "black" });
  items[24] = React2(inlineStyles.Path, { d: "M15 14H14V15H15V14Z", fill: "black" });
  items[25] = React2(inlineStyles.Path, { d: "M15 8H14V9H15V8Z", fill: "black" });
  items[26] = React2(inlineStyles.Path, { d: "M14 7H13V8H14V7Z", fill: "black" });
  items[27] = React2(inlineStyles.Path, { d: "M13 6H12V7H13V6Z", fill: "black" });
  items[28] = React2(inlineStyles.Path, { d: "M13 2H12V3H13V2Z", fill: "black" });
  items[29] = React2(inlineStyles.Path, { d: "M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z", fill: "black" });
  const obj13 = { d: "M12 3V2L4.00002 2V3L12 3Z", fill: primaryColorsTransformed[0] };
  items[30] = React2(inlineStyles.Path, obj13);
  items[31] = React2(inlineStyles.Path, { d: "M5 4V6H11V4H5Z", fill: "#AD7A60" });
  items[32] = React2(inlineStyles.Path, { d: "M16 9H15V14H16V9Z", fill: "black" });
  items[33] = React2(inlineStyles.Path, { d: "M4.00002 3V6H5.00002V4H11V6H12V3H4.00002Z", fill: "black" });
  items[34] = React2(inlineStyles.Path, { d: "M8.99999 8H6.99999V9H8.99999V8Z", fill: "white" });
  return _false(Svg, obj3);
};
