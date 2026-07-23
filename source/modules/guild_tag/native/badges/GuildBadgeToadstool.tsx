// Module ID: 12928
// Function ID: 100306
// Name: items
// Dependencies: [31, 33, 12924, 8018, 2]
// Exports: GuildBadgeToadstool

// Module 12928 (items)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let closure_4 = ["#be0351", "#ff2c52"];
let closure_5 = ["#ffb84b", "#ffe361"];
let closure_6 = [0.12, 0.25];
let items = [{ base: 5, tint: 1 }, { base: 4, tint: 1 }];
let closure_8 = [0.4, 0.8];
const items1 = [{ base: 5, tint: 1 }, { base: 4, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeToadstool.tsx");

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
  let obj = { width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 };
  ({ primaryTintColor, secondaryTintColor } = width);
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  let obj1 = require(12924) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items, secondaryBaseColors: closure_5, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z", fill: secondaryColorsTransformed[1] };
  items = [callback(require(8018) /* inlineStyles */.Path, obj1), callback(require(8018) /* inlineStyles */.Path, { d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z", fill: primaryColorsTransformed[1] }), callback(require(8018) /* inlineStyles */.Path, { d: "M12 0H4v1h8V0Z", fill: "#000" }), callback(require(8018) /* inlineStyles */.Path, { d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z", fill: "#fff" }), callback(require(8018) /* inlineStyles */.Path, { d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z", fill: "#000" }), callback(require(8018) /* inlineStyles */.Path, { d: "M2 7V3H1v6h2V7H2Z", fill: "#fff" }), callback(require(8018) /* inlineStyles */.Path, { d: "M15 3h-1v6h1V3Z", fill: primaryColorsTransformed[0] }), callback(require(8018) /* inlineStyles */.Path, { d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z", fill: "#fff" }), , , , , , , , , , , , , ];
  const obj4 = { opacity: 0.5, d: "M15 6h-1v2h1V6Z", fill: primaryColorsTransformed[0] };
  items[8] = callback(require(8018) /* inlineStyles */.Path, obj4);
  items[9] = callback(require(8018) /* inlineStyles */.Path, { d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z", fill: primaryColorsTransformed[0] });
  items[10] = callback(require(8018) /* inlineStyles */.Path, { d: "M6 10H5v2h1v-2Z", fill: "#fff" });
  items[11] = callback(require(8018) /* inlineStyles */.Path, { d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z", fill: secondaryColorsTransformed[0] });
  items[12] = callback(require(8018) /* inlineStyles */.Path, { d: "M5 12H4v2h1v-2Z", fill: "#fff" });
  items[13] = callback(require(8018) /* inlineStyles */.Path, { d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z", fill: primaryColorsTransformed[0] });
  items[14] = callback(require(8018) /* inlineStyles */.Path, { d: "M8 6H6v2h2V6Z", fill: "#fff" });
  const obj8 = { opacity: 0.5, d: "M8 7H6v1h2V7Z", fill: primaryColorsTransformed[0] };
  items[15] = callback(require(8018) /* inlineStyles */.Path, obj8);
  items[16] = callback(require(8018) /* inlineStyles */.Path, { d: "M10 8H6v1h4V8Z", fill: "#000" });
  items[17] = callback(require(8018) /* inlineStyles */.Path, { d: "M10 9H6v1h4V9Z", fill: "#fff" });
  items[18] = callback(require(8018) /* inlineStyles */.Path, { d: "M2 2H1v1h1V2Z", fill: "#000" });
  items[19] = callback(require(8018) /* inlineStyles */.Path, { d: "M5 3H4v1h1V3Z", fill: "#fff" });
  items[20] = callback(require(8018) /* inlineStyles */.Path, { d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z", fill: "#000" });
  obj["children"] = items;
  return callback2(require(8018) /* inlineStyles */.Svg, obj);
};
