// Module ID: 12828
// Function ID: 98179
// Name: items
// Dependencies: []
// Exports: GuildBadgeSnow

// Module 12828 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [-0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016944781580366387, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017682383819324415, 136902082560];
let closure_5 = [true, true, true];
let closure_6 = [];
const items = [{ accessibilityRole: null, s: null }, {}, { accessibilityRole: null, s: null }];
let closure_8 = ["<string:1169620994>", "<string:2638348290>", "<string:2063597941>"];
const items1 = [{ accessibilityRole: null, s: null }, { accessibilityRole: "<string:2491613185>", s: "<string:2941583362>" }, { accessibilityRole: null, s: null }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSnow.tsx");

export const GuildBadgeSnow = function GuildBadgeSnow(width) {
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
  obj1 = { d: "M11 10h1V9h3V8h-3V7h-1V4h2V3h-3v1H7V3H6V2H4v1H3v1H2v1H1v6h1v1h1v1h1v-2h4v1H7v1h1v1h2v-1h3v-1h-2v-2Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M9 11H8v1h1v-1ZM13 12h-1v1h1v-1ZM15 8h-1v1h1V8ZM12 7h-1v1h1V7ZM3 10H2v1h1v-1ZM4 11H3v2h1v-2ZM10 13H7v1h3v-1ZM10 10H9v1h1v-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": 659619842, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M9 6H8V5H4v1H3v4h1v1h4v-1h1V6Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M8 10H4v1h4v-1ZM4 9H3v1h1V9ZM9 9H8v1h1V9Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 6H3v1h1V6ZM6 7H5v1h1V7ZM8 5H4v1h4V5Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "black", "Bool(true)": "M1 14H0V12H1V14Z" }), callback(arg1(dependencyMap[3]).Path, { d: "M2 5H1v2h1V5ZM4 3H3v1h1V3ZM6 2H4v1h2V2ZM13 3h-3v1h3V3ZM9 1H8v1H7v1h1v1h1V3h1V2H9V1ZM6 12H5v1H4v1h1v1h1v-1h1v-1H6v-1Z", fill: primaryColorsTransformed[2] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
