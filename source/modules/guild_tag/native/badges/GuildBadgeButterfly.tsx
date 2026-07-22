// Module ID: 12847
// Function ID: 98218
// Name: items
// Dependencies: []
// Exports: GuildBadgeButterfly

// Module 12847 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [];
let closure_5 = [true, true];
const items = [{ accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: "Array", s: "isArray" }];
let closure_7 = [null];
let closure_8 = ["<string:3470340672>"];
const items1 = [{ accessibilityRole: "Array", s: "isArray" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeButterfly.tsx");

export const GuildBadgeButterfly = function GuildBadgeButterfly(width) {
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
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items, secondaryBaseColors: closure_7, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  const items = [callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), , , , , , ];
  obj1 = { d: "M6 10h1v1h-1v1h-1v1H2v-1h1v-1H2v1H1v-2h1v-1h4v1ZM14 10h1v2h-1v-1h-1v1h1v1H11v-1h-1v-1h-1v-1h1v-1h4v1ZM6 8H2V5h1v-1h3v4ZM13 5h1v3H10V4h3v1Z", fill: primaryColorsTransformed[0] };
  items[1] = callback(arg1(dependencyMap[3]).Path, obj1);
  items[2] = callback(arg1(dependencyMap[3]).Path, { d: "M5 14H2v-1h3v1ZM14 13v1H11v-1h3ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM11 13h-1v-1h1v1ZM15 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM14 12h-1v-1h1v1ZM2 6H1v-1h1v1ZM15 6h-1v-1h1v1ZM5 4h-2v1H2v-2h3v1ZM14 5h-1v-1h-2v-1h3v2Z", fill: primaryColorsTransformed[1] });
  const obj3 = { d: "M4 15H2v-1h2v1ZM14 14v1h-2v-1h2ZM2 14H1v-1h1v1ZM15 14h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM6 9H3v-1h3v1ZM13 9H10v-1h3v1ZM3 2h1v1H2v2H1V1h2v1ZM15 5h-1v-2h-2V2h1V1h2v4Z" };
  let first;
  if (null != secondaryColorsTransformed) {
    first = secondaryColorsTransformed[0];
  }
  if (null == first) {
    first = closure_7[0];
  }
  obj3.fill = first;
  items[3] = callback(arg1(dependencyMap[3]).Path, obj3);
  items[4] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false });
  items[5] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false });
  items[6] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "cry", "Bool(true)": "cry" });
  obj["children"] = items;
  return closure_3(arg1(dependencyMap[3]).Svg, obj);
};
