// Module ID: 12817
// Function ID: 98156
// Name: items
// Dependencies: []
// Exports: GuildBadgeLeaf

// Module 12817 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [true, true, true, true];
let closure_5 = [false, false, false, false];
const items = [{ accessibilityRole: null, s: null }, { accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: "y", s: "MessagesDataHeader" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLeaf.tsx");

export const GuildBadgeLeaf = function GuildBadgeLeaf(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let obj = { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(primaryTintColor, obj);
  let obj1 = arg1(dependencyMap[2]);
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj1.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z", fill: primaryColorsTransformed[2] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M11 13v-1H5v1h6Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M3 9H2v6h1V9Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M3 8v1h1V8H3Z", fill: primaryColorsTransformed[0] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
