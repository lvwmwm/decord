// Module ID: 12835
// Function ID: 98148
// Name: items
// Dependencies: []
// Exports: GuildBadgeBee

// Module 12835 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [true, true];
let closure_5 = ["TypeError", "r"];
const items = [{}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBee.tsx");

export const GuildBadgeBee = function GuildBadgeBee(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let obj = {};
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
  const items = [callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), , , , , ];
  obj1 = { d: "M4 11h-1v-1h1v1ZM6 11h-1v-1h1v1ZM10 11h-1v-1h-1V7h1v-1h1v5ZM7 10h-1v-1h1v1ZM4 9h-1v-1h1v1ZM7 8h-1v1h-1v-2h2v1ZM4 7h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  items[3] = callback(arg1(dependencyMap[3]).Path, obj1);
  items[4] = callback(arg1(dependencyMap[3]).Path, { d: "M7 13h-2v-2h1v-1h1v3ZM9 11h2v1h-1v1h-2V10h1v1ZM4 12h-1v-1h1v1ZM4 8h-1v1h1v1h-1v1H2V7h2v1ZM6 10h-1v-1h1v1ZM7 9h-1v-1h1v1Z", fill: primaryColorsTransformed[0] });
  items[5] = callback(arg1(dependencyMap[3]).Path, {});
  items[6] = callback(arg1(dependencyMap[3]).Path, {});
  items[7] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
