// Module ID: 12833
// Function ID: 98144
// Name: items
// Dependencies: []
// Exports: GuildBadgeCaterpillar

// Module 12833 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006116909751848566, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000245470351171209];
let closure_5 = [];
const items = [{}, {}];
let closure_7 = [-0.0000000000000000004065761797006269];
let closure_8 = [null];
const items1 = [{}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCaterpillar.tsx");

export const GuildBadgeCaterpillar = function GuildBadgeCaterpillar(width) {
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
  obj1 = { d: "M3 14H2v-1h1v1ZM2 13H1v-1h1v1ZM5 13h-2v-1H2v-1h3v2ZM12 10h2v1h-1v2h-2v-1h-1v-2h1v-1h1v1ZM15 12h-1v-1h1v1ZM7 5h-1v-1h-1v3h2v1h-1v2h-1v-1h-1V3h1V2h1V1h1v4ZM11 5h1v1h-1v1h-1V4h1v1ZM10 4h-1v-1h1v1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM5 10h1v2h-1v-1h-1v-2h1v1ZM12 9h-1v1h-1V7h1v-1h1v3ZM6 5h1v2h-2V4h1v1ZM9 4h-2V2h2v2Z", fill: primaryColorsTransformed[0] }), , ];
  const obj3 = { d: "M10 12h1v1h3v-1h1v2h-1v1H11v-1h-1v-1h-1V5h-1v5h-1v3h-1v1h-1v1H2v-1h2v-1h1v-1h1V8h1V4h3v8ZM2 14H1v-1h1v1Z" };
  let first;
  if (null != secondaryColorsTransformed) {
    first = secondaryColorsTransformed[0];
  }
  if (null == first) {
    first = closure_7[0];
  }
  obj3.fill = first;
  items[3] = callback(arg1(dependencyMap[3]).Path, obj3);
  items[4] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return closure_3(arg1(dependencyMap[3]).Svg, obj);
};
