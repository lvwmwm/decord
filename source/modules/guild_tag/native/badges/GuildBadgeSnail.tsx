// Module ID: 13014
// Function ID: 100699
// Name: items
// Dependencies: [31, 33, 12976, 8063, 2]
// Exports: GuildBadgeSnail

// Module 13014 (items)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let closure_4 = ["#7E1B1B", "#C7531A"];
let closure_5 = [0.25, 0.45];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
let closure_7 = ["#B86F00", "#E6D23B"];
let closure_8 = [0.5, 0.75];
const items1 = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSnail.tsx");

export const GuildBadgeSnail = function GuildBadgeSnail(width) {
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
  let obj1 = require(12976) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items, secondaryBaseColors: dependencyMap, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  items = [callback(require(8063) /* inlineStyles */.Path, { d: "M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z", fill: "white" }), , , , , , , ];
  obj1 = { d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[1] = callback(require(8063) /* inlineStyles */.Path, obj1);
  items[2] = callback(require(8063) /* inlineStyles */.Path, { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: primaryColorsTransformed[1] });
  items[3] = callback(require(8063) /* inlineStyles */.Path, { d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z", fill: primaryColorsTransformed[1] });
  items[4] = callback(require(8063) /* inlineStyles */.Path, { d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z", fill: primaryColorsTransformed[0] });
  const obj5 = { d: "M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z" };
  let tmp7;
  if (null != secondaryColorsTransformed) {
    tmp7 = secondaryColorsTransformed[1];
  }
  if (null == tmp7) {
    tmp7 = 33;
  }
  obj5.fill = tmp7;
  items[5] = callback(require(8063) /* inlineStyles */.Path, obj5);
  const obj6 = { d: "M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z" };
  let first;
  if (null != secondaryColorsTransformed) {
    first = secondaryColorsTransformed[0];
  }
  if (null == first) {
    first = 31;
  }
  obj6.fill = first;
  items[6] = callback(require(8063) /* inlineStyles */.Path, obj6);
  items[7] = callback(require(8063) /* inlineStyles */.Path, { d: "M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z", fill: "black" });
  obj["children"] = items;
  return closure_3(require(8063) /* inlineStyles */.Svg, obj);
};
