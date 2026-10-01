// Module ID: 13467
// Function ID: 13468
// Name: GuildBadgeMoon
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeMoon

// Module 13467 (GuildBadgeMoon)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#816bee", "#b79cf8", "#f0f0f0"];
const primaryTintLuminances = [0.15, 0.45, 0.9];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 5, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMoon.tsx");

export const GuildBadgeMoon = function GuildBadgeMoon(width) {
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
  items = [, , , , , , , , ];
  const obj4 = { d: "M14 5V3h-1V2h-1V1h-2v1h1v1h1v4h-1v1h-1v1H6V8H5V7H4V3h1V2h1V1H4v1H3v1H2v2H1v6h1v2h1v1h2v1h6v-1h2v-1h1v-2h1V5h-1Z", fill: primaryColorsTransformed[1] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M6 0H4v1h2V0ZM2 3H1v2h1V3ZM5 3H4v4h1V3ZM10 8H6v1h4V8Z", fill: "#000" });
  const obj5 = { d: "M10 9H6v1h4V9Z", fill: primaryColorsTransformed[2] };
  items[2] = React2(inlineStyles.Path, obj5);
  items[3] = React2(inlineStyles.Path, { d: "M1 5H0v6h1V5ZM11 15H5v1h6v-1Z", fill: "#000" });
  const obj6 = { d: "M2 10H1v1h1v-1ZM13 12h-2v1H5v-1H3v-1H2v2h1v1h2v1h6v-1h2v-1h1v-2h-1v1ZM15 10h-1v1h1v-1Z", fill: primaryColorsTransformed[0] };
  items[4] = React2(inlineStyles.Path, obj6);
  items[5] = React2(inlineStyles.Path, { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2Z", fill: "#000" });
  const obj7 = { d: "M6 1H4v1h2V1ZM4 2H3v1h1V2ZM3 3H2v1h1V3ZM2 5H1v1h1V5ZM3 6H2v1h1V6ZM5 7H4v1h1V7ZM6 8H5v1h1V8ZM12 7h-1v1h1V7ZM11 1h-1v1h1V1ZM11 8h-1v1h1V8Z", fill: primaryColorsTransformed[2] };
  items[6] = React2(inlineStyles.Path, obj7);
  items[7] = React2(inlineStyles.Path, { d: "M7 1H6v1h1V1ZM6 2H5v1h1V2ZM6 7H5v1h1V7ZM2 11H1v2h1v-2ZM3 13H2v1h1v-1ZM12 0h-2v1h2V0ZM13 14h-2v1h2v-1ZM5 14H3v1h2v-1ZM15 3h-1v2h1V3ZM12 3h-1v4h1V3ZM16 5h-1v6h1V5ZM13 1h-1v1h1V1ZM14 2h-1v1h1V2ZM10 1H9v1h1V1ZM11 2h-1v1h1V2ZM11 7h-1v1h1V7ZM15 11h-1v2h1v-2ZM14 13h-1v1h1v-1Z", fill: "#000" });
  const obj8 = { d: "M5 2H4v1h1V2Z", fill: primaryColorsTransformed[1] };
  items[8] = React2(inlineStyles.Path, obj8);
  return _false(Svg, obj3);
};
