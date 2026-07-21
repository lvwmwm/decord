// Module ID: 12834
// Function ID: 98155
// Name: items
// Dependencies: []
// Exports: GuildBadgeBlossom

// Module 12834 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = ["<string:3143958530>", "<string:2586968065>", "<string:2576980377>", "<string:3443509657>"];
let closure_5 = [];
const items = [{}, {}, {}, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBlossom.tsx");

export const GuildBadgeBlossom = function GuildBadgeBlossom(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let obj = { TOTAL_PREMIUM_GROUP_USERS: "spring", SUBMIT_UNAUTHENTICATED_REPORT_MENU: "linear", badge_text: "easeInEaseOut" };
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
  const items = [callback(arg1(dependencyMap[3]).Path, {}), , , , , , , , ];
  obj1 = { d: "M9 10v1h-2v-1h2ZM5 10h-1v-1h1v1ZM7 10h-1v-2h1v2ZM10 10h-1v-2h1v2ZM12 10h-1v-1h1v1ZM9 8h-2v-1h2v1ZM6 6h-1v-1h1v1ZM11 6h-1v-1h1v1Z", fill: primaryColorsTransformed[0] };
  items[1] = callback(arg1(dependencyMap[3]).Path, obj1);
  items[2] = callback(arg1(dependencyMap[3]).Path, { d: "M9 13h-1v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM6 11h-1v-1h1v1ZM11 11h-1v-1h1v1ZM6 8h-1v-2h1v2ZM11 8h-1v-1h-1v-1h2v2Z", fill: primaryColorsTransformed[2] });
  items[3] = callback(arg1(dependencyMap[3]).Path, { "Bool(false)": "<string:2386952194>", "Bool(false)": "<string:3578855425>" });
  items[4] = callback(arg1(dependencyMap[3]).Path, { "Bool(false)": 14.117647058823529, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032593855356872 });
  items[5] = callback(arg1(dependencyMap[3]).Path, {});
  items[6] = callback(arg1(dependencyMap[3]).Path, { d: "M5 11h1v1h2v1h-1v1h-1v1H3v-1h1v-1h-1v-2h1v-1h1v1ZM13 11h1v3h-1v-1h-1v1h1v1h-2v-1h-1v-1h-1v-1h1v-1h1v-1h2v1ZM5 9H2V6h1v-1h2v4ZM12 6h3v2h-1v1H11V5h1v1ZM9 2h1v1h1v2h-1v1H6v-1h-1v-2h1V2h2V1h1v1Z", fill: primaryColorsTransformed[3] });
  items[7] = callback(arg1(dependencyMap[3]).Path, { d: "M3 15H2v-1h1v1ZM14 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM13 14h-1v-1h1v1ZM9 12h-2v-1h2v1ZM7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM6 10h-1v-2h1v2ZM11 10h-1v-2h1v2ZM7 8h-1v-1h1v1ZM10 8h-1v-1h1v1ZM9 7h-2v-1h2v1Z", fill: primaryColorsTransformed[1] });
  items[8] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
