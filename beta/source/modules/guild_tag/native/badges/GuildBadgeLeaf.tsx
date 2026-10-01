// Module ID: 13469
// Function ID: 13470
// Name: GuildBadgeLeaf
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeLeaf

// Module 13469 (GuildBadgeLeaf)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#4a8359", "#7fb134", "#bcef42", "#f0f0f0"];
const primaryTintLuminances = [0.1, 0.2, 0.6, 0.9];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 10, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLeaf.tsx");

export const GuildBadgeLeaf = function GuildBadgeLeaf(width) {
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
  items = [, , , , , , , , , , ];
  const obj4 = { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: primaryColorsTransformed[2] };
  items[0] = React2(inlineStyles.Path, obj4);
  const obj5 = { d: "M11 13v-1H5v1h6Z", fill: primaryColorsTransformed[1] };
  items[1] = React2(inlineStyles.Path, obj5);
  items[2] = React2(inlineStyles.Path, { d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z", fill: "#fff" });
  const obj6 = { d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z", fill: primaryColorsTransformed[1] };
  items[3] = React2(inlineStyles.Path, obj6);
  items[4] = React2(inlineStyles.Path, { d: "M16 1h-1v6h1V1Z", fill: "#000" });
  const obj7 = { d: "M3 9H2v6h1V9Z", fill: primaryColorsTransformed[0] };
  items[5] = React2(inlineStyles.Path, obj7);
  items[6] = React2(inlineStyles.Path, { d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z", fill: "#000" });
  items[7] = React2(inlineStyles.Path, { d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z", fill: "#fff" });
  const obj8 = { d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z", fill: primaryColorsTransformed[0] };
  items[8] = React2(inlineStyles.Path, obj8);
  items[9] = React2(inlineStyles.Path, { d: "M5 4v1h1V4H5Z", fill: "#fff" });
  const obj9 = { d: "M3 8v1h1V8H3Z", fill: primaryColorsTransformed[0] };
  items[10] = React2(inlineStyles.Path, obj9);
  return _false(Svg, obj3);
};
