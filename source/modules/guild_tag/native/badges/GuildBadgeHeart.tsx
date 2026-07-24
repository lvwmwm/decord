// Module ID: 12984
// Function ID: 100637
// Name: items
// Dependencies: [31, 33, 12976, 8063, 2]
// Exports: GuildBadgeHeart

// Module 12984 (items)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let closure_4 = ["#ff1b90", "#ff7fc0", "#f0f0f0"];
let closure_5 = [0.2, 0.52, 1];
let items = [{ base: 3, tint: 1 }, { base: 2, tint: 1 }, { base: 5, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeHeart.tsx");

export const GuildBadgeHeart = function GuildBadgeHeart(primaryTintColor) {
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
  let obj1 = require(12976) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj1.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  items = [callback(require(8063) /* inlineStyles */.Path, { d: "M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z", fill: "#000" }), , , , , , ];
  obj1 = { d: "M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z", fill: primaryColorsTransformed[1] };
  items[1] = callback(require(8063) /* inlineStyles */.Path, obj1);
  items[2] = callback(require(8063) /* inlineStyles */.Path, { d: "M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z", fill: primaryColorsTransformed[0] });
  items[3] = callback(require(8063) /* inlineStyles */.Path, { d: "M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z", fill: "#000" });
  items[4] = callback(require(8063) /* inlineStyles */.Path, { d: "M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z", fill: primaryColorsTransformed[2] });
  items[5] = callback(require(8063) /* inlineStyles */.Path, { opacity: 0.6, d: "M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z", fill: "#fff" });
  items[6] = callback(require(8063) /* inlineStyles */.Path, { d: "M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z", fill: primaryColorsTransformed[2] });
  obj["children"] = items;
  return callback2(require(8063) /* inlineStyles */.Svg, obj);
};
