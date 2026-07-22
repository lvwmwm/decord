// Module ID: 12845
// Function ID: 98214
// Name: items
// Dependencies: []
// Exports: GuildBadgeMaple

// Module 12845 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [];
let closure_5 = [1950220290, 2, 11, null, null];
const items = [{}, { accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: "Array", s: "isArray" }, { accessibilityRole: "Array", s: "isArray" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeMaple.tsx");

export const GuildBadgeMaple = function GuildBadgeMaple(primaryTintColor) {
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
  obj1 = { d: "M5 12h-1v-1h1v1ZM7 12h-1v-2h-1v-1h1V6h1v6ZM5 9h-1v-1h1v1ZM4 8h-1v-1h1v1ZM3 7H2v-1h1v1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M5 12v-1h-1v-1H2V7h1v1h1v-1h-1v-1h2v1h1v2h-1v-1h-1v1h1v1h1v3H3v-1h2ZM7 6h-1v-1h1v1ZM8 3h-1V2h1v1Z", fill: primaryColorsTransformed[4] }), callback(arg1(dependencyMap[3]).Path, { d: "M9 13h-1V4h1v3h1v1h-1v2h1v1h-1v2ZM12 12h-1v-1h1v1ZM11 10h-1v-1h1v1ZM12 9h-1v-1h1v1ZM13 8h-1v-1h1v1ZM14 7h-1v-1h1v1ZM10 4h-1v-1h1v1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M15 13v1H10v-1h5ZM14 10h-2v-1h2v1ZM15 8h-1v-1h1v1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M8 15h-1V3h1V2h2v1h-1v1h-1v11ZM5 14H2v-1h3v1ZM12 11h-1v1h1v-1h1v1h1v1H9v-2h1v-1h1v-1h1v2Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, { d: "M12 8h-1v1h-1v1h-1v-2h1v-1h2v1ZM14 9h-2v-1h1v-1h1v2ZM10 7h-1V4h1v3ZM13 7h-1v-1h1v1ZM15 7h-1v-1h-1v-1h2v2Z", fill: primaryColorsTransformed[3] }), callback(arg1(dependencyMap[3]).Path, {})];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
