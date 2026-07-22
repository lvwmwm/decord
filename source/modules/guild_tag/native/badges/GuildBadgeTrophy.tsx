// Module ID: 12839
// Function ID: 98202
// Name: items
// Dependencies: []
// Exports: GuildBadgeTrophy

// Module 12839 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = ["<string:1099563009>", "<string:3276802>", "isArray"];
let closure_5 = [];
const items = [{}, { accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: "Array", s: "isArray" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeTrophy.tsx");

export const GuildBadgeTrophy = function GuildBadgeTrophy(primaryTintColor) {
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
  obj1 = { d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z", fill: primaryColorsTransformed[2] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M3.99999 2L6.99999 2V1L3.99999 1V2Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { d: "M12 14H3.99998V15H12V14Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M0.999985 9L0.999985 12H1.99998L1.99998 9H0.999985Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M8.99999 12H6.99999V13H8.99999V12Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M8.99999 7H6.99999V8H8.99999V7Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M0 14H1L1 9H0L0 14Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M15 14H14V15H15V14Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M15 8H14V9H15V8Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M14 7H13V8H14V7Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M13 6H12V7H13V6Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M13 2H12V3H13V2Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M11 2H10V6.99999H11V2Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M13 0H3.00002H2.99996H2.00002V2H3.00002V1H13V2H14V0H13Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M5 4V6H11V4H5Z", "Bool(true)": "#AD7A60" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M3 7V4H2V8H4V7H3Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": false, "Bool(true)": false })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
