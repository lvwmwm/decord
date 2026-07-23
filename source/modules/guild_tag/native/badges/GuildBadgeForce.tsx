// Module ID: 12937
// Function ID: 100324
// Name: items
// Dependencies: [31, 33, 491, 12924, 8018, 2]
// Exports: GuildBadgeForce

// Module 12937 (items)
import result from "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = ["#be0351", "#ff2c52", "#f0f0f0"];
let closure_6 = ["#ffb84b", "#ffe361", "#f0f0f0"];
let closure_7 = [0.3, 0.4, 1];
let items = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
let closure_9 = [0.3, 0.5, 1];
let items1 = [{ base: 8, tint: 1 }, { base: 3, tint: 1 }, { base: 2, tint: 1 }];
const result = require("v1").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeForce.tsx");

export const GuildBadgeForce = function GuildBadgeForce(width) {
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
  let obj = { width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 };
  ({ primaryTintColor, secondaryTintColor } = width);
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  const memo = React.useMemo(() => "badge-force-gradient-" + outer1_0(outer1_1[2]).v4(), []);
  let obj1 = require(12924) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_5, primaryTintColor, primaryTintLuminances: closure_7, primaryLuminanceWeights: items, secondaryBaseColors: closure_6, secondaryTintColor, secondaryTintLuminances: closure_9, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  items = [callback(require(8018) /* inlineStyles */.Path, { d: "M7 0H4v1h3V0ZM11 1H7v1h4V1ZM9 6H8v4h1V6ZM1 5H0v6h1V5ZM15 2h-4v1h4V2Z", fill: "#000" }), , , , , , , , , , , , , , , , , , , , ];
  obj1 = { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: secondaryColorsTransformed[2] };
  items[1] = callback(require(8018) /* inlineStyles */.Path, obj1);
  items[2] = callback(require(8018) /* inlineStyles */.Path, { d: "M15 3h-4v1h4V3Z", fill: primaryColorsTransformed[2] });
  items[3] = callback(require(8018) /* inlineStyles */.Path, { d: "M7 15H4v1h3v-1Z", fill: "#000" });
  items[4] = callback(require(8018) /* inlineStyles */.Path, { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: secondaryColorsTransformed[1] });
  items[5] = callback(require(8018) /* inlineStyles */.Path, { d: "M7 14H4v1h3v-1Z", fill: secondaryColorsTransformed[0] });
  items[6] = callback(require(8018) /* inlineStyles */.Path, { d: "M11 14H7v1h4v-1Z", fill: "#000" });
  items[7] = callback(require(8018) /* inlineStyles */.Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: secondaryColorsTransformed[1] });
  items[8] = callback(require(8018) /* inlineStyles */.Path, { d: "M15 13h-4v1h4v-1ZM4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v2h1V3ZM16 3h-1v1h1V3ZM15 4h-1v1h1V4ZM14 5h-1v2h1V5ZM16 12h-1v1h1v-1ZM15 11h-1v1h1v-1ZM14 9h-1v2h1V9ZM13 7h-1v2h1V7ZM4 14H3v1h1v-1ZM3 13H2v1h1v-1ZM2 11H1v2h1v-2ZM5 5H4v6h1V5ZM7 2H6v1h1V2ZM6 3H5v2h1V3Z", fill: "#000" });
  items[9] = callback(require(8018) /* inlineStyles */.Path, { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: secondaryColorsTransformed[2] });
  items[10] = callback(require(8018) /* inlineStyles */.Path, { d: "M5 3H4v2h1V3Z", fill: secondaryColorsTransformed[0] });
  items[11] = callback(require(8018) /* inlineStyles */.Path, { d: "M11 3h-1v1h1V3Z", fill: "#000" });
  items[12] = callback(require(8018) /* inlineStyles */.Path, { d: "M4 2H3v1h1V2Z", fill: secondaryColorsTransformed[2] });
  items[13] = callback(require(8018) /* inlineStyles */.Path, { d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z", fill: secondaryColorsTransformed[0] });
  const obj10 = { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: "url(#" + memo + ")" };
  items[14] = callback(require(8018) /* inlineStyles */.Path, obj10);
  items[15] = callback(require(8018) /* inlineStyles */.Path, { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: primaryColorsTransformed[1] });
  items[16] = callback(require(8018) /* inlineStyles */.Path, { d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z", fill: primaryColorsTransformed[0] });
  items[17] = callback(require(8018) /* inlineStyles */.Path, { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] });
  items[18] = callback(require(8018) /* inlineStyles */.Path, { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: primaryColorsTransformed[2] });
  items[19] = callback(require(8018) /* inlineStyles */.Path, { d: "M10 4H9v2h1V4ZM7 13H6v1h1v-1ZM6 11H5v2h1v-2ZM11 12h-1v1h1v-1ZM10 10H9v2h1v-2Z", fill: "#000" });
  const obj15 = {};
  const obj16 = { id: memo, cx: 0.75, cy: 0.5, r: 1, fx: 0.75, fy: 0.5 };
  items1 = [callback(require(8018) /* inlineStyles */.Stop, { stopColor: primaryColorsTransformed[1], offset: "30%" }), callback(require(8018) /* inlineStyles */.Stop, { stopColor: secondaryColorsTransformed[1], offset: "70%" })];
  obj16.children = items1;
  obj15.children = callback2(require(8018) /* inlineStyles */.RadialGradient, obj16);
  items[20] = callback(require(8018) /* inlineStyles */.Defs, obj15);
  obj["children"] = items;
  return callback2(require(8018) /* inlineStyles */.Svg, obj);
};
