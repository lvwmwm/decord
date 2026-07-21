// Module ID: 12835
// Function ID: 98175
// Name: items
// Dependencies: []
// Exports: GuildBadgeClover

// Module 12835 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [0.45, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001532559681246835, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006324];
let closure_5 = [];
const items = [{}, { "Null": "Array", "Null": "isArray" }, { "Null": "Array", "Null": "isArray" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeClover.tsx");

export const GuildBadgeClover = function GuildBadgeClover(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let obj = { 9223372036854775807: false, 9223372036854775807: false, 9223372036854775807: false };
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
  const items = [callback(arg1(dependencyMap[3]).Path, {}), , , , , ];
  obj1 = { d: "M9 12h1v2H5v-1h1v-2h3v1ZM14 7h-1v2h1v2h-2v-1h-1v-1h-1v-2h1v-1h3v1ZM5 10H2V6h3v4ZM10 4h-1v1H6V2h4v2Z", fill: primaryColorsTransformed[2] };
  items[1] = callback(arg1(dependencyMap[3]).Path, obj1);
  items[2] = callback(arg1(dependencyMap[3]).Path, { d: "M7 15h-2v-1h2v1ZM10 14v-2h1v3h-2v-1h1ZM10 12h-1v-1h1v1ZM4 11H2v-1h2v1ZM9 11h-2v-1h2v1ZM15 11h-1v-2h1v2ZM6 9h-1v-2h1v2ZM14 9h-1v-2h1v2ZM15 7h-1v-2h1v2ZM9 6h-2v-1h2v1ZM10 5h-1v-1h1v1ZM11 4h-1V2h1v2Z", fill: primaryColorsTransformed[1] });
  items[3] = callback(arg1(dependencyMap[3]).Path, { d: "M15 15h-1v-1h1v1ZM14 14h-1v-1h1v1ZM13 13h-1v-1h1v1ZM5 12h-1v-1h1v1ZM12 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM9 9h-2v-2h2v2ZM7 7h-1v-1h1v1ZM10 7h-1v-1h1v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1Z", fill: primaryColorsTransformed[0] });
  items[4] = callback(arg1(dependencyMap[3]).Path, {});
  items[5] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
