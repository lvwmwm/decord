// Module ID: 12839
// Function ID: 98183
// Name: items
// Dependencies: []
// Exports: GuildBadgeWiltedFlower

// Module 12839 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [-4315226215028688000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1569498207454278000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019983040032295948];
let closure_5 = ["disabled", "style", "inputTextStyle"];
const items = [{}, { "Null": "Array", "Null": "isArray" }, { "Null": "Array", "Null": "isArray" }];
let closure_7 = ["notification_clicked", "experiment_user_triggered"];
let closure_8 = [true, true];
const items1 = [{}, { "Null": "Array", "Null": "isArray" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWiltedFlower.tsx");

export const GuildBadgeWiltedFlower = function GuildBadgeWiltedFlower(width) {
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
  let obj = { 1390895496: "ERROR", -1120325613: "ERROR", 1549155172: "NOT_RESPONDER", 101339490: "NOT_RESPONDER" };
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
  obj1 = { d: "M2 12h1v1h1v1h1v-1h1v1h1v1H3v-1H2v-1H1V10h1v2Zm3 1h-1v-1h1v1ZM11 2H6v1h-1v1h-1v8h-1V3h1V2h1V1h6v1Z" };
  let tmp7;
  if (null != secondaryColorsTransformed) {
    tmp7 = secondaryColorsTransformed[1];
  }
  if (null == tmp7) {
    tmp7 = closure_7[1];
  }
  obj1.fill = tmp7;
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M8 11h-1v-1h1v1ZM9 10h-1v-1h1v1ZM14 10h-2v-1h2v1ZM10 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-1v-2h1v2ZM12 6h-1V3h1v3Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M11 9h1v1h-1v1H8v-1h1v-1h1v-1h1v1Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M14 10v-1h1v2H12v-1h2ZM11 6h-1v2h-1v1h-1v-2h1V4h1v-1h1v3ZM13 4h1v5h-2v-1h-1v-2h1V3h1v1Z", fill: primaryColorsTransformed[2] }), , , ];
  const obj5 = { d: "M5 14h-1v-1h1v1ZM4 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM12 3H9V2h3v1Z" };
  let first;
  if (null != secondaryColorsTransformed) {
    first = secondaryColorsTransformed[0];
  }
  if (null == first) {
    first = closure_7[0];
  }
  obj5.fill = first;
  items[5] = callback(arg1(dependencyMap[3]).Path, obj5);
  items[6] = callback(arg1(dependencyMap[3]).Path, {});
  items[7] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return closure_3(arg1(dependencyMap[3]).Svg, obj);
};
