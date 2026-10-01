// Module ID: 13465
// Function ID: 13466
// Name: GuildBadgeSkull
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgeSkull

// Module 13465 (GuildBadgeSkull)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#57595f", "#847d8b", "#d1cdd5"];
const primaryTintLuminances = [0, 0.12, 0.6];
let items = [{ base: 10, tint: 1 }, { base: 5, tint: 1 }, { base: 2, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSkull.tsx");

export const GuildBadgeSkull = function GuildBadgeSkull(width) {
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
  items = [, , , , , , , , , , , , , , , ];
  const obj4 = { d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z", fill: primaryColorsTransformed[2] };
  items[0] = React2(inlineStyles.Path, obj4);
  items[1] = React2(inlineStyles.Path, { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z", fill: "#000" });
  const obj5 = { d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z", fill: primaryColorsTransformed[1] };
  items[2] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M7 8H5v2h2V8Z", fill: primaryColorsTransformed[0] };
  items[3] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M12 7H9v3h3V7Z", fill: primaryColorsTransformed[1] };
  items[4] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M12 8h-2v2h2V8Z", fill: primaryColorsTransformed[0] };
  items[5] = React2(inlineStyles.Path, obj8);
  const obj9 = { d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z", fill: primaryColorsTransformed[1] };
  items[6] = React2(inlineStyles.Path, obj9);
  items[7] = React2(inlineStyles.Path, { d: "M1 4H0v6h1V4Z", fill: "#000" });
  items[8] = React2(inlineStyles.Path, { d: "M2 4H1v6h1V4Z", fill: "#fff" });
  items[9] = React2(inlineStyles.Path, { d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z", fill: "#000" });
  const obj10 = { d: "M14 10.01h1v-6h-1v6Z", fill: primaryColorsTransformed[1] };
  items[10] = React2(inlineStyles.Path, obj10);
  items[11] = React2(inlineStyles.Path, { d: "M4 0v1h8V0H4Z", fill: "#000" });
  items[12] = React2(inlineStyles.Path, { d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z", fill: "#fff" });
  items[13] = React2(inlineStyles.Path, { d: "M5 15v1h6v-1H5Z", fill: "#000" });
  const obj11 = { d: "M5 14v1h6v-1H5Z", fill: primaryColorsTransformed[1] };
  items[14] = React2(inlineStyles.Path, obj11);
  const obj12 = { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: primaryColorsTransformed[0] };
  items[15] = React2(inlineStyles.Path, obj12);
  return _false(Svg, obj3);
};
