// Module ID: 12835
// Function ID: 98157
// Name: items
// Dependencies: []
// Exports: GuildBadgePottedPlant

// Module 12835 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = ["<string:3704409292>", "<string:1146569023>", "<string:1665269761>"];
let closure_5 = ["__d", "r", "isArray"];
const items = [{}, {}, {}];
let closure_7 = [-957777708, 1060257900, 1236950581];
let closure_8 = [];
const items1 = [{}, {}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgePottedPlant.tsx");

export const GuildBadgePottedPlant = function GuildBadgePottedPlant(width) {
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
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items, secondaryBaseColors: closure_7, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M8 9h-1V4h1v5Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z", fill: primaryColorsTransformed[1] }), , , , , ];
  const obj6 = { d: "M13 11v1H3v-1h10Z" };
  let first;
  if (null != secondaryColorsTransformed) {
    first = secondaryColorsTransformed[0];
  }
  let str = "#FD7531";
  if (null != first) {
    str = first;
  }
  obj6.fill = str;
  items[5] = callback(arg1(dependencyMap[3]).Path, obj6);
  items[6] = callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 4, "Bool(false)": 16 });
  const obj7 = { d: "M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z" };
  let tmp9;
  if (null != secondaryColorsTransformed) {
    tmp9 = secondaryColorsTransformed[2];
  }
  let str2 = "#FFC781";
  if (null != tmp9) {
    str2 = tmp9;
  }
  obj7.fill = str2;
  items[7] = callback(arg1(dependencyMap[3]).Path, obj7);
  const obj8 = { d: "M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z" };
  let tmp11;
  if (null != secondaryColorsTransformed) {
    tmp11 = secondaryColorsTransformed[1];
  }
  let str3 = "#FFAE49";
  if (null != tmp11) {
    str3 = tmp11;
  }
  obj8.fill = str3;
  items[8] = callback(arg1(dependencyMap[3]).Path, obj8);
  items[9] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return closure_3(arg1(dependencyMap[3]).Svg, obj);
};
