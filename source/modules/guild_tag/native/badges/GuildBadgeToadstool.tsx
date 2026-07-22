// Module ID: 12814
// Function ID: 98150
// Name: items
// Dependencies: []
// Exports: GuildBadgeToadstool

// Module 12814 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [true, true];
let closure_5 = ["renderHeader", "renderHeader"];
let closure_6 = [0.00000000000000000000000000000000000000000000000000000000000004666121990266684, 0.00000000000000000000000000000000000000000000000000000000000004679190265376467];
const items = [{}, { accessibilityRole: null, s: null }];
let closure_8 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002005877794038387, 3534679895544171000000000000000000000000000000000000000000000000000000000];
const items1 = [{}, { accessibilityRole: null, s: null }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeToadstool.tsx");

export const GuildBadgeToadstool = function GuildBadgeToadstool(width) {
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
  let obj = { 9223372036854775807: -24, -9223372036854775808: null, -9223372036854775808: 1, 9223372036854775807: "Malaysia" };
  ({ primaryTintColor, secondaryTintColor } = width);
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  let obj1 = arg1(dependencyMap[2]);
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items, secondaryBaseColors: closure_5, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z", fill: secondaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null }), callback(arg1(dependencyMap[3]).Path, { d: "M15 3h-1v6h1V3Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), , , , , , , , , , , , , ];
  const obj4 = { raw: false, textAlign: false, fill: primaryColorsTransformed[0] };
  items[8] = callback(arg1(dependencyMap[3]).Path, obj4);
  items[9] = callback(arg1(dependencyMap[3]).Path, { d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z", fill: primaryColorsTransformed[0] });
  items[10] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null });
  items[11] = callback(arg1(dependencyMap[3]).Path, { d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z", fill: secondaryColorsTransformed[0] });
  items[12] = callback(arg1(dependencyMap[3]).Path, {});
  items[13] = callback(arg1(dependencyMap[3]).Path, { d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z", fill: primaryColorsTransformed[0] });
  items[14] = callback(arg1(dependencyMap[3]).Path, {});
  const obj8 = { raw: null, textAlign: -1, fill: primaryColorsTransformed[0] };
  items[15] = callback(arg1(dependencyMap[3]).Path, obj8);
  items[16] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null });
  items[17] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null });
  items[18] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null });
  items[19] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null });
  items[20] = callback(arg1(dependencyMap[3]).Path, { "Bool(true)": null, "Bool(true)": null });
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
