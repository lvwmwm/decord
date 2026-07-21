// Module ID: 12829
// Function ID: 98145
// Name: items
// Dependencies: []
// Exports: GuildBadgeCrown

// Module 12829 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [-10717673092973436000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -72460078556573750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_5 = [null, null];
const items = [{}, {}];
let closure_7 = [-0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023534373682784334, 1202829493843000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_8 = ["x", "hash"];
const items1 = [{}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCrown.tsx");

export const GuildBadgeCrown = function GuildBadgeCrown(width) {
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
  obj1 = { d: "M0.999985 2V14H1.99998V15H14V14H15V2H14V3H13V4H11V3H9.99998V2H8.99998V1H6.99998V2H5.99998V3H4.99998V4H2.99998V3H1.99998V2H0.999985Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M1 6.99998H2L2 3.99998H1L1 6.99998Z", "Bool(false)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M3 6.99998H4L4 3.99998H3L3 6.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M12 6.99998H13V3.99998H12V6.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M14 3.99998V2.99998H12V3.99998H14Z", "Bool(false)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M8 10H7V12H8V10Z", "Bool(false)": "white" }), callback(arg1(dependencyMap[3]).Path, { d: "M13 5.00002V4.00002H14V15H12V5.00002H13Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M4.99999 5.00002H3V15H4.99999V5.00002Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { d: "M10 7.00002V6.00002H9V5.00002H7V6.00002H6V7.00002H5V8.00001H6V11H7V12H9V11H10V8.00001H11V7.00002H10Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M6.99998 12H8.99998V10H6.99998V12Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M9 7.00002V6.00002H7V7.00002H6V9.00001H10V7.00002H9Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M10 12V11H11V10H9V13H12V12H10Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M14 8.99998V7.99998H12V8.99998H14Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M16 3.99998H15V6.99998H16V3.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M11 9.99998H12V8.99998H11V9.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M14 7.99998H15V6.99998H14V7.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M14 3.99998H15V2.99998H14V3.99998Z", "Bool(false)": "black" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "M7 13H4V14H7V13Z", "Bool(false)": "white" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "flex", "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": true, "Bool(false)": true }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 25395009, "Bool(false)": 83710208 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 17423169, "Bool(false)": 83710208 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 35376449, "Bool(false)": 621826304 }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 40928065, "Bool(false)": 83710208 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 30276929, "Bool(false)": 83710208 })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
