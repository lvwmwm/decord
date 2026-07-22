// Module ID: 12829
// Function ID: 98181
// Name: items
// Dependencies: []
// Exports: GuildBadgeSound

// Module 12829 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [null, null, null, null];
let closure_5 = ["<string:1211695106>", "<string:2586968066>", "<string:2576980377>"];
let closure_6 = [-27909521367027006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000001181567619301478, 0.56, false];
const items = [{ accessibilityRole: null, s: null }, { accessibilityRole: "\u{1F4A0}", s: 6 }, { accessibilityRole: null, s: null }, { accessibilityRole: null, s: null }];
let closure_8 = [false, false, false];
const items1 = [{ accessibilityRole: null, s: null }, { accessibilityRole: "<string:2491613185>", s: "<string:2941583362>" }, { accessibilityRole: null, s: null }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSound.tsx");

export const GuildBadgeSound = function GuildBadgeSound(width) {
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
  obj1 = { d: "M14 7V6h-2V5h-1V4h-1V2H9V1H7v1H6v2H5v1H4v1H2v1H1v2h1v1h2v1h1v1h1v2h1v1h2v-1h1v-2h1v-1h1v-1h2V9h1V7h-1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M11 7H9V6H7v1H5v2h2v1h2V9h2V7Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "<string:40887617>", "Bool(true)": "<string:2882359552>" }), callback(arg1(dependencyMap[3]).Path, { d: "M3 1H1v2h1V2h1V1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { d: "M7 2H6v1h1V2ZM8 3H7v1h1V3ZM5 5H4v1h1V5ZM3 6H2v1h1V6ZM2 7H1v1h1V7Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { d: "M3 15v-1h2v-2H4v-1H2v2H1v2h2Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M2 13H1v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M15 12H14V10H15V12Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { d: "M5 2H2v3h2V4h1V2ZM14 5V2h-3v2h1v1h2Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 2H4v2h1V2ZM4 4H3v1h1V4ZM14 3h-1v2h1V3ZM15 2h-1v1h1V2Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M13 15v-1h-2v-2h1v-1h2v2h1v2h-2Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M15 13h-1v1h1v-1ZM14 11h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "CARD", "Bool(true)": "targetFrames" }), callback(arg1(dependencyMap[3]).Path, { d: "M9 1H7v1h2V1ZM9 7H7v2h2V7Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { d: "M15 1h-2v1h2V1ZM13 2h-2v1h2V2Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "r", "Bool(true)": "isArray" }), callback(arg1(dependencyMap[3]).Path, { d: "M5 12H4v2h1v-2ZM4 11H3v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M15 7h-1v2h1V7ZM14 6h-1v1h1V6ZM14 9h-1v1h1V9ZM12 9h-1v1h1V9ZM9 11H7v1h2v-1ZM10 10H9v1h1v-1ZM7 10H6v1h1v-1ZM9 14H7v1h2v-1ZM10 13H9v1h1v-1ZM7 13H6v1h1v-1ZM5 9H4v1h1V9ZM2 8H1v1h1V8ZM3 9H2v1h1V9Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {})];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
