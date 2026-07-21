// Module ID: 12800
// Function ID: 98083
// Name: items
// Dependencies: []
// Exports: GuildBadgeSword

// Module 12800 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [];
let closure_5 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002005877581838807, 723348967109402500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000007422542821890205];
let closure_6 = ["<string:1215168514>", "<string:1205272578>", "<string:2586968066>"];
const items = [{}, {}, {}];
let closure_8 = [562949956446202.4, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000234646050647015, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000633986912404581];
const items1 = [{}, {}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSword.tsx");

export const GuildBadgeSword = function GuildBadgeSword(width) {
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
  obj1 = { d: "M11 1v1h-1v1H9v1H8v1H7v2H6v1h2v2h1V9h2V8h1V7h1V6h1V5h1V1h-4Z", fill: secondaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M3 9h1v1h2v2h1v1h2v1h2v-2H9v-1H8v-1H7V9H6V8H5V7H4V5H2v2h1v2Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 11H3v2h2v-2ZM3 13H1v2h2v-2Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M15 1h-1v4h1V1Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M5 12H3v1h2v-1ZM3 14H1v1h2v-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM11 5h-1v1h1V5ZM10 6H9v1h1V6ZM9 7H8v1h1V7Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 7H6v1h1V7Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 8H3v1h1V8ZM3 6H2v1h1V6ZM5 9H4v1h1V9ZM7 11H6v1h1v-1ZM8 12H7v1h1v-1ZM10 13H9v1h1v-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M11 12h-1v1h1v-1ZM9 11H8v1h1v-1ZM8 10H7v1h1v-1ZM7 9H6v1h1V9ZM6 8H5v1h1V8ZM5 7H4v1h1V7Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M8 5H7v1h3V5H9V4H8v1ZM10 2v1H9v1h3V3h-1V2h-1ZM14 1h-3v1h3V1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M14 5h-1v1h1V5ZM13 6h-1v1h1V6ZM12 7h-1v1h1V7ZM11 8h-1v1h1V8ZM9 9H8v1h1V9Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 5H3v1h1V5ZM4 11H3v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
