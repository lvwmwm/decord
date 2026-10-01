// Module ID: 13496
// Function ID: 13497
// Name: GuildBadgePottedPlant
// Dependencies: [19, 21, 13462, 7909, 2]
// Exports: GuildBadgePottedPlant

// Module 13496 (GuildBadgePottedPlant)
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
const primaryBaseColors = ["#003E22", "#027D46", "#14A95C"];
const primaryTintLuminances = [0.1, 0.25, 0.45];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const secondaryBaseColors = ["#FD7531", "#FFAE49", "#FFC781"];
const secondaryTintLuminances = [0.45, 0.6, 0.75];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgePottedPlant.tsx");

export const GuildBadgePottedPlant = function GuildBadgePottedPlant(width) {
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
  items = [, , , , , , , , , ];
  const obj4 = { d: "M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
  items[0] = React2(inlineStyles.Path, obj4);
  const obj5 = { d: "M8 9h-1V4h1v5Z", fill: primaryColorsTransformed[2] };
  items[1] = React2(inlineStyles.Path, obj5);
  const obj6 = { d: "M6 3h1v1h-1v1h-1v-1h-1v1H2V2h4v1Zm-3 1h1v-1h-1v1Z", fill: primaryColorsTransformed[2], fillRule: "evenodd" };
  items[2] = React2(inlineStyles.Path, obj6);
  const obj7 = { d: "M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z", fill: primaryColorsTransformed[2] };
  items[3] = React2(inlineStyles.Path, obj7);
  const obj8 = { d: "M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z", fill: primaryColorsTransformed[1] };
  items[4] = React2(inlineStyles.Path, obj8);
  let str;
  const Path = inlineStyles.Path;
  const tmp5 = _false;
  if (secondaryColorsTransformed != null) {
    str = secondaryColorsTransformed[0];
  }
  if (str == null) {
    str = "#FD7531";
  }
  items[5] = React2(Path, { d: "M13 11v1H3v-1h10Z", fill: str });
  items[6] = React2(inlineStyles.Path, { d: "M4 14h-1v-2h1v2ZM5 11h-2v-1h2v1ZM2 4H1V2h1v2ZM10 4h-1v-1h1v1ZM11 3h-1V2h1v1ZM5 2H2V1h3v1ZM14 2H11V1h3v1Z", fill: "white" });
  let str2;
  const Path2 = tmp2(7909).Path;
  if (secondaryColorsTransformed != null) {
    str2 = secondaryColorsTransformed[2];
  }
  if (str2 == null) {
    str2 = "#FFC781";
  }
  items[7] = React2(Path2, { d: "M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z", fill: str2 });
  let str3;
  const Path3 = tmp2(7909).Path;
  if (secondaryColorsTransformed != null) {
    str3 = secondaryColorsTransformed[1];
  }
  if (str3 == null) {
    str3 = "#FFAE49";
  }
  items[8] = React2(Path3, { d: "M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z", fill: str3 });
  items[9] = React2(inlineStyles.Path, { d: "M12 15v1H4v-1h8ZM4 15h-1v-1h1v1ZM13 15h-1v-1h1v1ZM7 9h2V6h4v1H10v2h4v5h-1V10H3v4H2V9h4v-2H3v-1h4v3ZM3 6H2v-1h1v1ZM14 6h-1v-1h1v1ZM2 5H1v-1h1v1ZM15 5h-1v-1h1v1ZM1 4H0V2h1v2ZM9 4h-2v-1h2v1ZM16 4h-1V2h1v2ZM7 3h-1V2h1v1ZM10 3h-1V2h1v1ZM2 2H1V1h1v1ZM6 2h-1V1h1v1ZM11 2h-1V1h1v1ZM15 2h-1V1h1v1ZM5 1H2V0h3v1ZM14 1H11V0h3v1Z", fill: "black" });
  return tmp5(Svg, obj3);
};
