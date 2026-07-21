// Module ID: 12824
// Function ID: 98135
// Name: items
// Dependencies: []
// Exports: GuildBadgeDog

// Module 12824 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [36902965012219050000, -39201945095672230000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_5 = [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011353216886528814];
let closure_6 = [];
const items = [{}, {}];
let closure_8 = [true];
const items1 = [{}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeDog.tsx");

export const GuildBadgeDog = function GuildBadgeDog(width) {
  let primaryTintColor;
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
  const primaryColorsTransformed = transformedBadgeColors.primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M3 2.00002V5.00002H11V6.00001H9.99997V7.00001H8.99997V8.00001L15 8.00001V10H14V11H8V14H1V10V4.00002H2V2.00002H3Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M8 8.00002V9.00002H7V11H6V12H3V11H2V10H1V14H8V11H14V10H15V8.00002H8Z", fill: transformedBadgeColors.secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M7.99997 2.00002H6.99997V4.00002H7.99997V2.00002Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 2.00002V1.00002L3 1.00002V2.00002H5Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "black", "Bool(false)": "M2 12H1V13H2V12Z" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 40823361, "Bool(false)": 83710208 }), callback(arg1(dependencyMap[3]).Path, { d: "M12 8V9H13V10H15V8H12Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M9 1.00002H8V2.00002H9V1.00002Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M12 6.00002H11V7.00002H12V6.00002Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M15 7V3H14V7H15Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M2 7L2 3H1L1 7H2Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M1 12L1 6.99998H0L0 12H1Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M13 6V3H10V6H13Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M6 6V3H3V6H6Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M13 9H3V10H13V9Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M14 8H13V9H14V8Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M7 7H6V8H7V7Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M10 7H9V8H10V7Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M3 8H2V9H3V8Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M9.99998 4H8.99998V5H9.99998V4Z", "Bool(false)": "#D1CDD5" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "<string:2151809026>", "Bool(false)": "<string:1509950064>" })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
