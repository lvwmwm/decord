// Module ID: 12832
// Function ID: 98142
// Name: items
// Dependencies: []
// Exports: GuildBadgeSnail

// Module 12832 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [null, null];
let closure_5 = [];
const items = [{}, {}];
let closure_7 = [false, false];
let closure_8 = ["TypeError", "r"];
const items1 = [{}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSnail.tsx");

export const GuildBadgeSnail = function GuildBadgeSnail(width) {
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
  let obj = { onValueChange: "r", step: "onRequireModeratorMFAClick", flexDirection: "Array", alignItems: "isSpamMessageRequest" };
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
  const items = [callback(arg1(dependencyMap[3]).Path, {}), , , , , , , ];
  obj1 = { d: "M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[1] = callback(arg1(dependencyMap[3]).Path, obj1);
  items[2] = callback(arg1(dependencyMap[3]).Path, { d: "M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z", fill: primaryColorsTransformed[1] });
  items[3] = callback(arg1(dependencyMap[3]).Path, { d: "M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z", fill: primaryColorsTransformed[1] });
  items[4] = callback(arg1(dependencyMap[3]).Path, { d: "M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z", fill: primaryColorsTransformed[0] });
  const obj5 = { d: "M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z" };
  let tmp7;
  if (null != secondaryColorsTransformed) {
    tmp7 = secondaryColorsTransformed[1];
  }
  if (null == tmp7) {
    tmp7 = closure_7[1];
  }
  obj5.fill = tmp7;
  items[5] = callback(arg1(dependencyMap[3]).Path, obj5);
  const obj6 = { d: "M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z" };
  let first;
  if (null != secondaryColorsTransformed) {
    first = secondaryColorsTransformed[0];
  }
  if (null == first) {
    first = closure_7[0];
  }
  obj6.fill = first;
  items[6] = callback(arg1(dependencyMap[3]).Path, obj6);
  items[7] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return closure_3(arg1(dependencyMap[3]).Svg, obj);
};
