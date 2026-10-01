// Module ID: 13466
// Function ID: 13467
// Name: GuildBadgeToadstool
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeToadstool

// Module 13466 (GuildBadgeToadstool)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#be0351", "#ff2c52"];
const secondaryBaseColors = ["#ffb84b", "#ffe361"];
const primaryTintLuminances = [0.12, 0.25];
let items = [{ base: 5, tint: 1 }, { base: 4, tint: 1 }];
const secondaryTintLuminances = [0.4, 0.8];
const items1 = [{ base: 5, tint: 1 }, { base: 4, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeToadstool.tsx");

export const GuildBadgeToadstool = function GuildBadgeToadstool(width) {
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
  items = [, , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z", fill: secondaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  const obj5 = { d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z", fill: primaryColorsTransformed[1] };
  items[1] = React2(inlineStyles.Path, obj5);
  items[2] = React2(inlineStyles.Path, { d: "M12 0H4v1h8V0Z", fill: "#000" });
  items[3] = React2(inlineStyles.Path, { d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z", fill: "#fff" });
  items[4] = React2(inlineStyles.Path, { d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z", fill: "#000" });
  items[5] = React2(inlineStyles.Path, { d: "M2 7V3H1v6h2V7H2Z", fill: "#fff" });
  const obj6 = { d: "M15 3h-1v6h1V3Z", fill: primaryColorsTransformed[0] };
  items[6] = React2(inlineStyles.Path, obj6);
  items[7] = React2(inlineStyles.Path, { d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z", fill: "#fff" });
  const obj7 = { opacity: 0.5, d: "M15 6h-1v2h1V6Z", fill: primaryColorsTransformed[0] };
  items[8] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z", fill: primaryColorsTransformed[0] };
  items[9] = React2(inlineStyles.Path, obj8);
  items[10] = React2(inlineStyles.Path, { d: "M6 10H5v2h1v-2Z", fill: "#fff" });
  const obj9 = { d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z", fill: secondaryColorsTransformed[0] };
  items[11] = React2(inlineStyles.Path, obj9);
  items[12] = React2(inlineStyles.Path, { d: "M5 12H4v2h1v-2Z", fill: "#fff" });
  const obj10 = { d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z", fill: primaryColorsTransformed[0] };
  items[13] = React2(inlineStyles.Path, obj10);
  items[14] = React2(inlineStyles.Path, { d: "M8 6H6v2h2V6Z", fill: "#fff" });
  const obj11 = { opacity: 0.5, d: "M8 7H6v1h2V7Z", fill: primaryColorsTransformed[0] };
  items[15] = React2(inlineStyles.Path, obj11);
  items[16] = React2(inlineStyles.Path, { d: "M10 8H6v1h4V8Z", fill: "#000" });
  items[17] = React2(inlineStyles.Path, { d: "M10 9H6v1h4V9Z", fill: "#fff" });
  items[18] = React2(inlineStyles.Path, { d: "M2 2H1v1h1V2Z", fill: "#000" });
  items[19] = React2(inlineStyles.Path, { d: "M5 3H4v1h1V3Z", fill: "#fff" });
  items[20] = React2(inlineStyles.Path, { d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z", fill: "#000" });
  return _false(Svg, obj3);
};
