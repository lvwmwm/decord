// Module ID: 12822
// Function ID: 98166
// Name: items
// Dependencies: []
// Exports: GuildBadgeFlower

// Module 12822 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [true, true, true];
let closure_5 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003152909256905305, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002353652551387877, 0.00000000000000000000000000000000000000000000000000000000000004667307916202893];
let closure_6 = ["channelId", "channelId", "channelId"];
const items = [{ accessibilityRole: null, s: null }, { accessibilityRole: null, s: null }, {}];
let closure_8 = [];
const items1 = [{ accessibilityRole: null, s: null }, { accessibilityRole: null, s: null }, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFlower.tsx");

export const GuildBadgeFlower = function GuildBadgeFlower(width) {
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
  obj1 = { d: "M15 2h-1V1h-3v3h-1V2H9V1H7v1H6v2H5V1H2v1H1v4h1v1h2v1h1v2h1v1h1v1h2v-1h1v-1h1V8h1V7h2V6h1V2Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M11 10v1h-1v1H9v1H7v-1H6v-1H5v-1H1v4h1v1h12v-1h1v-4h-4Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 12H3v1h1v-1ZM3 11H2v1h1v-1ZM12 14v-1h-1v1H9v-1H7v1H5v-1H4v1H2v1h12v-1h-2ZM13 12h-1v1h1v-1ZM14 11h-1v1h1v-1ZM15 13h-1v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M6 9H5v1h1V9ZM7 10H6v1h1v-1ZM10 10H9v1h1v-1ZM11 9h-1v1h1V9ZM12 7h-1v1h1V7ZM14 6h-1v1h1V6ZM15 4h-1v2h1V4ZM9 11H7v1h2v-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M10 12H9v1h1v-1ZM11 11h-1v1h1v-1ZM12 10h-1v1h1v-1ZM1 10v2h1v-1h3v-1H1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M2 2H1v2h1V2ZM5 1H2v1h3V1ZM7 2H6v1h1V2ZM9 1H7v1h2V1ZM12 1h-1v2h1V2h2V1h-2Z", fill: primaryColorsTransformed[2] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
