// Module ID: 13487
// Function ID: 13488
// Name: GuildBadgeGoat
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeGoat

// Module 13487 (GuildBadgeGoat)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#87553B", "#B88166"];
const primaryTintLuminances = [0.2, 0.5];
let items = [{ base: 7, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeGoat.tsx");

export const GuildBadgeGoat = function GuildBadgeGoat(width) {
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
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M15 6H13V8H15V6Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  const obj5 = { d: "M2.99998 6H0.999985V8H2.99998V6Z", fill: primaryColorsTransformed[1] };
  items[1] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z", fill: primaryColorsTransformed[1] };
  items[2] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M10 6V7H9V10H11V11H12V6H10Z", fill: primaryColorsTransformed[0] };
  items[3] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M6 6V7H7V10H5V11H4V6H6Z", fill: primaryColorsTransformed[0] };
  items[4] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M9.99998 12H5.99998V13H9.99998V12Z", fill: primaryColorsTransformed[0] };
  items[5] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M15 7H13V8H15V7Z", fill: primaryColorsTransformed[0] };
  items[6] = React2(inlineStyles.Path, obj10);
  const obj11 = { d: "M2.99998 7H0.999985V8H2.99998V7Z", fill: primaryColorsTransformed[0] };
  items[7] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M8.99998 14H6.99998V15H8.99998V14Z", fill: primaryColorsTransformed[0] };
  items[8] = React2(inlineStyles.Path, obj12);
  items[9] = React2(inlineStyles.Path, { d: "M9.99998 4H8.99998V5H9.99998V4Z", fill: "#D1CDD5" });
  items[10] = React2(inlineStyles.Path, { d: "M6.99998 4H5.99998V5H6.99998V4Z", fill: "#D1CDD5" });
  items[11] = React2(inlineStyles.Path, { d: "M11 5H9.99998V6H11V5Z", fill: "#D1CDD5" });
  items[12] = React2(inlineStyles.Path, { d: "M5.99998 5H4.99998V6H5.99998V5Z", fill: "#D1CDD5" });
  items[13] = React2(inlineStyles.Path, { d: "M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z", fill: "white" });
  items[14] = React2(inlineStyles.Path, { d: "M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z", fill: "white" });
  items[15] = React2(inlineStyles.Path, { d: "M12 2H11V3H12V2Z", fill: "#D1CDD5" });
  items[16] = React2(inlineStyles.Path, { d: "M4.99998 2H3.99998V3H4.99998V2Z", fill: "#D1CDD5" });
  items[17] = React2(inlineStyles.Path, { d: "M4.99998 0H1.99998V1H4.99998V0Z", fill: "black" });
  items[18] = React2(inlineStyles.Path, { d: "M14 0H11V1H14V0Z", fill: "black" });
  items[19] = React2(inlineStyles.Path, { d: "M5.99998 9V7H4.99999V9H5.99998Z", fill: "black" });
  items[20] = React2(inlineStyles.Path, { d: "M11 9V7H9.99999V9H11Z", fill: "black" });
  items[21] = React2(inlineStyles.Path, { d: "M8.99998 12H6.99998V13H8.99998V12Z", fill: "black" });
  items[22] = React2(inlineStyles.Path, { d: "M8.99998 10H6.99998V11H8.99998V10Z", fill: "black" });
  items[23] = React2(inlineStyles.Path, { d: "M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z", fill: "black" });
  items[24] = React2(inlineStyles.Path, { d: "M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z", fill: "black" });
  items[25] = React2(inlineStyles.Path, { d: "M11 11V10H10V14H11V12H12V11H11Z", fill: "black" });
  items[26] = React2(inlineStyles.Path, { d: "M9.99998 14H8.99998V15H9.99998V14Z", fill: "black" });
  items[27] = React2(inlineStyles.Path, { d: "M7 15V14H6V15H5V16H9V15H7Z", fill: "black" });
  items[28] = React2(inlineStyles.Path, { d: "M5 10V11H4V12H5V14H6V10H5Z", fill: "black" });
  items[29] = React2(inlineStyles.Path, { d: "M2 2V1H1V3H3V2H2Z", fill: "black" });
  items[30] = React2(inlineStyles.Path, { d: "M5.99998 1H4.99998V2H5.99998V1Z", fill: "black" });
  items[31] = React2(inlineStyles.Path, { d: "M9 2V3H7V2H6V4H10V2H9Z", fill: "black" });
  items[32] = React2(inlineStyles.Path, { d: "M11 1H9.99998V2H11V1Z", fill: "black" });
  items[33] = React2(inlineStyles.Path, { d: "M14 1V2H13V3H15V1H14Z", fill: "black" });
  return _false(Svg, obj3);
};
