// Module ID: 13468
// Function ID: 13469
// Name: GuildBadgeLightning
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeLightning

// Module 13468 (GuildBadgeLightning)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const primaryTintLuminances = [0.15, 0.5, 0.9];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 2 }, { base: 10, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLightning.tsx");

export const GuildBadgeLightning = function GuildBadgeLightning(width) {
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
  items = [, , , , , , , , , , , , ];
  const obj4 = { d: "M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M1 7H0v2h1V7Z", fill: "#000" });
  const obj5 = { d: "M2 7H1v2h1V7Z", fill: primaryColorsTransformed[2] };
  items[2] = React2(inlineStyles.Path, obj5);
  items[3] = React2(inlineStyles.Path, { d: "M16 7h-1v2h1V7ZM3 6H1v1h2V6ZM6 4H4v1h2V4ZM4 5H3v1h1V5Z", fill: "#000" });
  const obj6 = { d: "M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[2] };
  items[4] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z", fill: primaryColorsTransformed[0] };
  items[5] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M15 7h-1v1h1V7Z", fill: primaryColorsTransformed[2] };
  items[6] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z", fill: primaryColorsTransformed[0] };
  items[7] = React2(inlineStyles.Path, obj9);
  const obj10 = { d: "M10 2H9v1h1V2Z", fill: primaryColorsTransformed[2] };
  items[8] = React2(inlineStyles.Path, obj10);
  items[9] = React2(inlineStyles.Path, { d: "M9 2H7v1h2V2ZM7 3H6v1h1V3ZM13 0h-3v1h3V0Z", fill: "#000" });
  const obj11 = { d: "M13 1h-3v1h3V1Z", fill: primaryColorsTransformed[2] };
  items[10] = React2(inlineStyles.Path, obj11);
  items[11] = React2(inlineStyles.Path, { d: "M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z", fill: "#000" });
  const obj12 = { d: "M11 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] };
  items[12] = React2(inlineStyles.Path, obj12);
  return _false(Svg, obj3);
};
