// Module ID: 12837
// Function ID: 98198
// Name: items
// Dependencies: []
// Exports: GuildBadgeDiamond

// Module 12837 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [];
let closure_5 = [290142531025474000000000000, 6546787591235852000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
const items = [{ accessibilityRole: null, s: 0 }, { accessibilityRole: "Array", s: "isArray" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeDiamond.tsx");

export const GuildBadgeDiamond = function GuildBadgeDiamond(primaryTintColor) {
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
  obj1 = { d: "M12 2H4V3H3V4H2V5H1V8H2V9H3V10H4V11H5V12H6V13H7V14H9V13H10V12H11V11H12V10H13V9H14V8H15V5H14V4H13V3H12V2Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M8 13H7V14H8V13Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 12H6V13H7V12Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M6 11H5V12H6V11Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 10H4V11H5V10Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 9H3V10H4V9Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M3 8H2V9H3V8Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M2 7H1V8H2V7Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M2 5.00002V4.00002H1V13H2V14H3V5.00002H2Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M6.99998 15H8.99998V13H6.99998V15Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { d: "M12 7.00001V8.00001H11V9.00001H9.99997V10H8.99997V11H7.99997V13H8.99997V12H9.99997V11H11V10H12V9.00001H13V8.00001H14V7.00001H12Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Null": true, "Null": true, "Null": false }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M6.99998 9.00002H8.99998V7.00002H6.99998V9.00002Z", "Bool(true)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M0.999985 15H1.99998L1.99998 14H0.999985L0.999985 15Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M1.99998 3H2.99998V2L1.99998 2V3Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M4.99998 3H5.99998V2L4.99998 2V3Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M3.99997 3.00001V6.00001H4.99997V5.00001H5.99997V4.00001H6.99997V3.00001H3.99997Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M5.99998 2L6.99998 2V1L5.99998 1V2Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M6.99998 1L8.99998 1V0L6.99998 0V1Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M2.99998 4L4.99998 4V3H2.99998V4Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M8.99998 2L9.99998 2V1L8.99998 1V2Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M9.99998 3H11V2L9.99998 2V3Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M13 3H14V2L13 2V3Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M11 4L13 4V3H11V4Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M14 15H15V14H14V15Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M1 1.00002V1.52588e-05H0V14H1V2.00002H2V1.00002H1Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M15 1.52588e-05V1.00002H14V2.00002H15V14H16V1.52588e-05H15Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M14 15H1.99998V16H14V15Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M6.99998 13H8.99998V12H6.99998V13Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M8.99998 12H9.99998V11H8.99998V12Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M5.99998 12H6.99998V11H5.99998V12Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M4.99998 11H5.99998V8H4.99998V11Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M9.99998 11H11V8H9.99998V11Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M12 15H3.99998V16H12V15Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M13 13H12V15H13V13Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M3.99998 13H2.99998V15H3.99998V13Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M5 10V11H6V12H4V13H7V10H5Z", "Bool(true)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": "M0 6.99998H1L1 3.99998H0L0 6.99998Z", "Bool(true)": "black" })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
