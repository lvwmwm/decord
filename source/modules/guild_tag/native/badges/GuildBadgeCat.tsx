// Module ID: 12836
// Function ID: 98196
// Name: items
// Dependencies: []
// Exports: GuildBadgeCat

// Module 12836 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = ["<string:859823308>", "<string:858993459>", "<string:4186931>"];
let closure_5 = ["<string:1221984258>", "<string:1211695106>", "<string:2586968066>"];
const items = [{ accessibilityRole: "y", s: "MessagesDataHeader" }, { accessibilityRole: null, s: null }, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCat.tsx");

export const GuildBadgeCat = function GuildBadgeCat(primaryTintColor) {
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
  obj1 = { d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M14 14H13V13H14V14Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M3 14H2V13H3V14Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M10 2.99976H11V5.99976H10V2.99976Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 2.99976H6V5.99976H5V2.99976Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 3.99976H9V6.99983H7V3.99976Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "black", "Bool(true)": "M12 3H13V2L12 2V3Z" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "<string:24346689>", "Bool(true)": "<string:2882359552>" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "<string:40888641>", "Bool(true)": "<string:2882359552>" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "<string:40976193>", "Bool(true)": "<string:2882359552>" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M0.999985 3H1.99998L1.99998 2L0.999985 2L0.999985 3Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M1.99998 4H2.99998V3H1.99998V4Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { d: "M13 14H3V15H13V14Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M4.99998 4H5.99998V3H4.99998V4Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M9.99998 4H11V3H9.99998V4Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M9 2.00002V1.00002H7V2.00002H6V3.00002H7V5.00002H9V3.00002H10V2.00002H9Z", "Bool(true)": "white" })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
