// Module ID: 12803
// Function ID: 98091
// Name: items
// Dependencies: []
// Exports: GuildBadgeWaterDrop

// Module 12803 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [false, false, false];
let closure_5 = ["int64", "kite", "WISHLIST_ITEM_CLICKED"];
const items = [{}, {}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWaterDrop.tsx");

export const GuildBadgeWaterDrop = function GuildBadgeWaterDrop(primaryTintColor) {
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
  obj1 = { d: "M13 6V5h-1V4h-1V3h-1V2H9V1H7v1H6v1H5v1H4v1H3v1H2v2H1v5h1v1h2v1h8v-1h2v-1h1V8h-1V6h-1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M4 14v1h8v-1H4Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M7 1v1h2V1H7Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M6 2v1h1V2H6ZM5 3v1h1V3H5ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM3 5v1h1V5H3ZM2 6v2h1V6H2ZM1 8v2h1V8H1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 5v1h1V5h-1ZM13 6v2h1V6h-1ZM14 8v4h-1v1h-1v1h2v-1h1V8h-1ZM2 14h2v-1H2v1Z", fill: primaryColorsTransformed[0] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
