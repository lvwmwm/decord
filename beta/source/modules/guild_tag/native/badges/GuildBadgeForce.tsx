// Module ID: 13475
// Function ID: 13476
// Name: GuildBadgeForce
// Dependencies: [19, 21, 1255, 13462, 7909, 2]
// Exports: GuildBadgeForce

// Module 13475 (GuildBadgeForce)
import v1 from "v1" /* 1255 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const primaryBaseColors = ["#be0351", "#ff2c52", "#f0f0f0"];
const secondaryBaseColors = ["#ffb84b", "#ffe361", "#f0f0f0"];
const primaryTintLuminances = [0.3, 0.4, 1];
let items = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const secondaryTintLuminances = [0.3, 0.5, 1];
let items1 = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeForce.tsx");

export const GuildBadgeForce = function GuildBadgeForce(width) {
  let RadialGradient;
  let combined;
  let obj18;
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
  const memo = react.useMemo(() => {
    const obj = v1;
    return "badge-force-gradient-" + obj.v4();
  }, []);
  let obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj2);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  let tmp9Result = typeof num === "number";
  if (typeof num === "number") {
    tmp9Result = num > 0;
  }
  if (tmp9Result) {
    tmp9Result = typeof num2 === "number";
  }
  if (tmp9Result) {
    tmp9Result = num2 > 0;
  }
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
  const Svg = tmp3(7909).Svg;
  const merged1 = Object.assign(merged);
  items = [_false(inlineStyles.Path, { d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z", fill: "#000" }), , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: secondaryColorsTransformed[2] };
  items[1] = _false(inlineStyles.Path, obj4);
  const obj5 = { d: "M15 3h-4v1h4V3Z", fill: primaryColorsTransformed[2] };
  items[2] = _false(inlineStyles.Path, obj5);
  items[3] = _false(inlineStyles.Path, { d: "M7 15H4v1h3v-1Z", fill: "#000" });
  const obj6 = { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: secondaryColorsTransformed[1] };
  items[4] = _false(inlineStyles.Path, obj6);
  const obj7 = { d: "M7 14H4v1h3v-1Z", fill: secondaryColorsTransformed[0] };
  items[5] = _false(inlineStyles.Path, obj7);
  items[6] = _false(inlineStyles.Path, { d: "M11 14H7v1h4v-1Z", fill: "#000" });
  const obj8 = { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: secondaryColorsTransformed[1] };
  items[7] = _false(inlineStyles.Path, obj8);
  items[8] = _false(inlineStyles.Path, { d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z", fill: "#000" });
  const obj9 = { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: secondaryColorsTransformed[2] };
  items[9] = _false(inlineStyles.Path, obj9);
  const obj10 = { d: "M5 3H4v2h1V3Z", fill: secondaryColorsTransformed[0] };
  items[10] = _false(inlineStyles.Path, obj10);
  items[11] = _false(inlineStyles.Path, { d: "M11 3h-1v1h1V3Z", fill: "#000" });
  const obj11 = { d: "M4 2H3v1h1V2Z", fill: secondaryColorsTransformed[2] };
  items[12] = _false(inlineStyles.Path, obj11);
  const obj12 = { d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z", fill: secondaryColorsTransformed[0] };
  items[13] = _false(inlineStyles.Path, obj12);
  const Path = tmp3(7909).Path;
  if (tmp9Result) {
    const _HermesInternal = HermesInternal;
    combined = "url(#" + memo + ")";
  } else {
    combined = primaryColorsTransformed[1];
  }
  items[14] = _false(Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: combined });
  const obj13 = { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: primaryColorsTransformed[1] };
  items[15] = _false(inlineStyles.Path, obj13);
  const obj14 = { d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z", fill: primaryColorsTransformed[0] };
  items[16] = _false(inlineStyles.Path, obj14);
  const obj15 = { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] };
  items[17] = _false(inlineStyles.Path, obj15);
  const obj16 = { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: primaryColorsTransformed[2] };
  items[18] = _false(inlineStyles.Path, obj16);
  items[19] = _false(inlineStyles.Path, { d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z", fill: "#000" });
  if (tmp9Result) {
    const obj17 = { children: React3(RadialGradient, obj18) };
    const Defs = tmp3(7909).Defs;
    obj18 = { id: memo, cx: 0.75, cy: 0.5, r: 1, fx: 0.75, fy: 0.5, children: items1 };
    RadialGradient = tmp3(7909).RadialGradient;
    const obj19 = { stopColor: primaryColorsTransformed[1], offset: "30%" };
    items1 = [_false(inlineStyles.Stop, obj19), ];
    const obj20 = { stopColor: secondaryColorsTransformed[1], offset: "70%" };
    items1[1] = _false(inlineStyles.Stop, obj20);
    tmp9Result = tmp9(Defs, obj17);
  }
  items[20] = tmp9Result;
  return React3(Svg, obj3);
};
