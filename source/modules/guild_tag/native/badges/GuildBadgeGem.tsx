// Module ID: 12815
// Function ID: 98116
// Name: items
// Dependencies: []
// Exports: GuildBadgeGem

// Module 12815 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [true, true, true, true];
let closure_5 = [0.1, 0.5, 1, 0.07];
let closure_6 = [false, false, false, false];
const items = [{}, {}, {}, {}];
let closure_8 = [false, false, false, false];
const items1 = [{}, {}, {}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeGem.tsx");

export const GuildBadgeGem = function GuildBadgeGem(width) {
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
  obj1 = { d: "M13 8v1h-1v1h-1V3h-1V2H9V1H8v14h6v-1h-2v-1h1v-1h1v-1h1V8h-2Z", fill: secondaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M9 1H7v1h2V1ZM7 2H6v1h1V2ZM7 6H6v1h1V6Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 12H4v1h1v-1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M6 12H5v1h1v-1ZM2 13H1v1h1v-1ZM8 14H2v1h6v-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 13H3v1h1v-1ZM3 12H2v1h1v-1ZM6 10V8H5v3h1v3h1v-4H6ZM7 2v3H6v1h1v3h1V2H7Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M14 8h-1v1h1V8ZM13 9h-1v1h1V9Z", fill: secondaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 11H3v1h2v-1ZM3 10H1v1h2v-1Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { d: "M2 12v-2H1v2h1Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { d: "M11 3h-1v1h1V3Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M6 3H5v3h1V3Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M9 2H8v2h1V2ZM10 6V4H9v4h1v1h1V6h-1ZM12 10h-1v1h1v-1ZM9 10H8v3h1v-3ZM11 13h-1v1h1v-1ZM11 11h-1v1h1v-1ZM12 12h-1v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 14v-1h-1v1H8v1h6v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
