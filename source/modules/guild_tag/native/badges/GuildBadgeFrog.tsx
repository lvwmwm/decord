// Module ID: 12825
// Function ID: 98137
// Name: items
// Dependencies: []
// Exports: GuildBadgeFrog

// Module 12825 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [null, null];
let closure_5 = [0.25, 0.45];
const items = [{}, {}];
let closure_7 = [-10717673092973436000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -72460078556573750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_8 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002005877794038387, -168373347252623070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
const items1 = [{}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeFrog.tsx");

export const GuildBadgeFrog = function GuildBadgeFrog(width) {
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
  obj1 = { d: "M9 2V3H7V2H3V3H2V7H1V12H2V13H4V14H12V13H14V12H15V7H14V3H13V2H9Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "USE_JPEG", "Bool(false)": "tidaWebformEnabled" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M3.00002 10V12H4.00002V13H12V12H13V10H3.00002Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 13H4V14H12V13Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M13 13V12H12V13H13Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 13V12H3.00001V13H4Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M14 13V12H13V13H14Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M3.00002 13V12H2.00001V13H3.00002Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M15 11H14V12H15V11Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M2 11H1V12H2V11Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": true, "Bool(false)": true }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": null, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": -45023230, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "r", "Bool(false)": "isArray" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": -45023230, "Bool(false)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005949185235801894, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001199903136610515 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "r", "Bool(false)": "isArray" }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": -45023231, "Bool(false)": 1073234180 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 885613684615123000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 313658116430311200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "r", "Bool(false)": "isArray" }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "<string:83710208>", "Bool(false)": "<string:31489345>" })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
