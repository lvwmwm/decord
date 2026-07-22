// Module ID: 12816
// Function ID: 98154
// Name: items
// Dependencies: []
// Exports: GuildBadgeLightning

// Module 12816 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [];
let closure_5 = ["channelId", "channelId", "channelId"];
const items = [{}, { accessibilityRole: "heading-md/normal", s: "display" }, { accessibilityRole: "y", s: "MessagesDataHeader" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeLightning.tsx");

export const GuildBadgeLightning = function GuildBadgeLightning(primaryTintColor) {
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
  obj1 = { d: "M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M2 7H1v2h1V7Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M15 7h-1v1h1V7Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M10 2H9v1h1V2Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M13 1h-3v1h3V1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M11 2h-1v1h1V2Z", fill: primaryColorsTransformed[1] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
