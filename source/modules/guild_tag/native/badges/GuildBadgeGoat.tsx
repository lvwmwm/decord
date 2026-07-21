// Module ID: 12826
// Function ID: 98139
// Name: items
// Dependencies: []
// Exports: GuildBadgeGoat

// Module 12826 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [0.6, 0.75];
let closure_5 = [0.25, 0.45];
const items = [{}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeGoat.tsx");

export const GuildBadgeGoat = function GuildBadgeGoat(primaryTintColor) {
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
  obj1 = { d: "M15 6H13V8H15V6Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M2.99998 6H0.999985V8H2.99998V6Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M10 6V7H9V10H11V11H12V6H10Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M6 6V7H7V10H5V11H4V6H6Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M9.99998 12H5.99998V13H9.99998V12Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M15 7H13V8H15V7Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M2.99998 7H0.999985V8H2.99998V7Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M8.99998 14H6.99998V15H8.99998V14Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "isArray", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "white", "Bool(false)": "M4 12H12V13H4V12Z" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": false, "Bool(false)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M10 4H6V3H10V4Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M15 14H14V13H15V14Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M14 13H13V12H14V13Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M2 14H1V13H2V14Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M3 13H2V12H3V13Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M16 13H15V6H16V13Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M15 6H14V0H15V6Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M2 6H1V0H2V6Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M1 13H0V6H1V13Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M12 3H13V4H12V3Z", "Bool(false)": "#FF7FC0" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 40924993, "Bool(false)": 83710208 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 40906818, "Bool(false)": 38108672 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "<string:4047634434>", "Bool(false)": "<string:2113929839>" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 1090519621, "Bool(false)": 94919 }), callback(arg1(dependencyMap[3]).Path, {})];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
