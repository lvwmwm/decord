// Module ID: 12830
// Function ID: 98183
// Name: items
// Dependencies: []
// Exports: GuildBadgeSun

// Module 12830 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [];
let closure_5 = [];
let closure_6 = [true, true, true];
const items = [{ accessibilityRole: null, s: null }, { accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: null, s: null }, { accessibilityRole: null, s: null }];
let closure_8 = [439032545672510400000000000000000000000000000000000000000000000000000000000000000000000, 4024035684805515000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010151701200152398];
const items1 = [{ accessibilityRole: "\u{1F4A0}", s: 6 }, { accessibilityRole: -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, s: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892 }, { accessibilityRole: null, s: null }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSun.tsx");

export const GuildBadgeSun = function GuildBadgeSun(width) {
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
  let obj = { 9223372036854775807: -24, -9223372036854775808: null, -9223372036854775808: 1, 9223372036854775807: "Malaysia" };
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
  obj1 = { d: "M14 6v1h-3V6h-1V5H9V2h1V1H1v1h2v1h1v1h2v2H5v1H4v2H3v2H2v2H1v2h3v-1h2v-1h1v-1h1v-1h2v-1h1V9h1v1h1v1h1v1h1V6h-1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "black", "Bool(true)": "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z" }), callback(arg1(dependencyMap[3]).Path, { d: "M10 1H1v1h9V1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "<string:40867137>", "Bool(true)": "<string:2882359552>" }), callback(arg1(dependencyMap[3]).Path, { d: "M11 2h-1v2h1V2ZM14 1h-3v1h3V1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M14 5h-3v1h3V5Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { d: "M15 2h-1v3h1V2Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M15 6H14V4H15V6Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { d: "M15 6h-1v6h1V6Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": -161246703667269280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001803584665029009 }), callback(arg1(dependencyMap[3]).Path, { d: "M11 4h-1v1h1V4Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "r", "Bool(true)": "isArray" }), callback(arg1(dependencyMap[3]).Path, { d: "M10 7v1H9v1H8v1H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h2v-1h1V7h-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M5 7H4v1h1V7ZM6 6H5v1h1V6Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 5H6v1h1V5ZM8 4H7v1h1V4Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M6 8H5v1h1V8ZM4 9H3v1h1V9ZM3 11H2v1h1v-1ZM2 13H1v1h1v-1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M14 2h-3v3h3V2Z", fill: secondaryColorsTransformed[1] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
