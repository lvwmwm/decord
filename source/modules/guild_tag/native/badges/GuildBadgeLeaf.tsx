// Module ID: 12931
// Function ID: 100312
// Name: items
// Dependencies: [31, 33, 12924, 8018, 2]
// Exports: GuildBadgeLeaf

// Module 12931 (items)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let closure_4 = ["#4a8359", "#7fb134", "#bcef42", "#f0f0f0"];
let closure_5 = [0.1, 0.2, 0.6, 0.9];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }, { base: 3, tint: 1 }, { base: 10, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLeaf.tsx");

export const GuildBadgeLeaf = function GuildBadgeLeaf(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let obj = { width: 0, height: 0, primaryTintColor: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(primaryTintColor, obj);
  let obj1 = require(12924) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj1.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: primaryColorsTransformed[2] };
  items = [callback(require(8018) /* inlineStyles */.Path, obj1), callback(require(8018) /* inlineStyles */.Path, { d: "M11 13v-1H5v1h6Z", fill: primaryColorsTransformed[1] }), callback(require(8018) /* inlineStyles */.Path, { d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z", fill: "#fff" }), callback(require(8018) /* inlineStyles */.Path, { d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z", fill: primaryColorsTransformed[1] }), callback(require(8018) /* inlineStyles */.Path, { d: "M16 1h-1v6h1V1Z", fill: "#000" }), callback(require(8018) /* inlineStyles */.Path, { d: "M3 9H2v6h1V9Z", fill: primaryColorsTransformed[0] }), callback(require(8018) /* inlineStyles */.Path, { d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z", fill: "#000" }), callback(require(8018) /* inlineStyles */.Path, { d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z", fill: "#fff" }), callback(require(8018) /* inlineStyles */.Path, { d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z", fill: primaryColorsTransformed[0] }), callback(require(8018) /* inlineStyles */.Path, { d: "M5 4v1h1V4H5Z", fill: "#fff" }), callback(require(8018) /* inlineStyles */.Path, { d: "M3 8v1h1V8H3Z", fill: primaryColorsTransformed[0] })];
  obj["children"] = items;
  return callback2(require(8018) /* inlineStyles */.Svg, obj);
};
