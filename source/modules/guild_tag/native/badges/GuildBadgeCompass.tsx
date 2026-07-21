// Module ID: 12811
// Function ID: 98107
// Name: items
// Dependencies: []
// Exports: GuildBadgeCompass

// Module 12811 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [];
let closure_5 = [true, true, true];
let closure_6 = [];
const items = [{}, {}, {}];
let closure_8 = [];
const items1 = [{}, {}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCompass.tsx");

export const GuildBadgeCompass = function GuildBadgeCompass(width) {
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
  let obj = { "Bool(true)": null, "Bool(true)": 4, "Bool(true)": 4, "Bool(true)": "rgba(0, 0, 0, 0.75)" };
  ({ primaryTintColor, secondaryTintColor } = width);
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  let obj1 = arg1(dependencyMap[2]);
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items, secondaryBaseColors: closure_5, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z", fill: secondaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M7 1v1h2V1H7Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 6v1h2V6H7Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M6 4H5v1h1V4ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 9v1h2V9H7Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 10H6v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M8 4H7v1h1V4Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M10 5H9v1h1V5ZM11 4h-1v1h1V4Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "isArray", "Bool(false)": "isArray" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006746562717564251, "Bool(false)": 0.0000000000000000015720950825766396 }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {})];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
