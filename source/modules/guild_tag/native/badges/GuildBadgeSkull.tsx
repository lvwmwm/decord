// Module ID: 12804
// Function ID: 98093
// Name: items
// Dependencies: []
// Exports: GuildBadgeSkull

// Module 12804 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = ["<string:1205272578>", "<string:2587033602>", "<string:2576980377>"];
let closure_5 = [82.192, 128.192, 0];
const items = [{}, {}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSkull.tsx");

export const GuildBadgeSkull = function GuildBadgeSkull(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let obj = { TOTAL_PREMIUM_GROUP_USERS: "spring", SUBMIT_UNAUTHENTICATED_REPORT_MENU: "linear", badge_text: "easeInEaseOut" };
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
  obj1 = { d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z", fill: primaryColorsTransformed[2] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 8H5v2h2V8Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 7H9v3h3V7Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 8h-2v2h2V8Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M14 10.01h1v-6h-1v6Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M5 14v1h6v-1H5Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: primaryColorsTransformed[0] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
