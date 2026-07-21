// Module ID: 12816
// Function ID: 98135
// Name: items
// Dependencies: []
// Exports: GuildBadgeForce

// Module 12816 (items)
let closure_2 = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = [];
let closure_6 = [];
let closure_7 = [0.6, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002562422606566584, -0.0000000000000000000000000000000000000000000000000000000000000000000009417915449788479];
const items = [{ "Null": null, "Null": null }, { "Null": "Array", "Null": "isArray" }, { "Null": "\u{1F4A0}", "Null": 6 }];
let closure_9 = [];
const items1 = [{ "Null": null, "Null": null }, { "Null": "Array", "Null": "isArray" }, { "Null": "\u{1F4A0}", "Null": 6 }];
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeForce.tsx");

export const GuildBadgeForce = function GuildBadgeForce(width) {
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
  const memo = React.useMemo(() => "badge-force-gradient-" + callback(closure_1[2]).v4(), []);
  let obj1 = arg1(dependencyMap[3]);
  obj = { primaryBaseColors: closure_5, primaryTintColor, primaryTintLuminances: closure_7, primaryLuminanceWeights: items, secondaryBaseColors: closure_6, secondaryTintColor, secondaryTintLuminances: closure_9, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  const items = [callback(arg1(dependencyMap[4]).Path, {}), , , , , , , , , , , , , , , , , , , , ];
  obj1 = { d: "M7 1H4v1h3V1ZM11 2H7v1h4V2Z", fill: secondaryColorsTransformed[2] };
  items[1] = callback(arg1(dependencyMap[4]).Path, obj1);
  items[2] = callback(arg1(dependencyMap[4]).Path, { d: "M15 3h-4v1h4V3Z", fill: primaryColorsTransformed[2] });
  items[3] = callback(arg1(dependencyMap[4]).Path, {});
  items[4] = callback(arg1(dependencyMap[4]).Path, { d: "M6 14v-1H5v-2H4V5h1V3h1V2H4v1H2v4H1v4h1v2h1v1h1v1h3v-1H6Z", fill: secondaryColorsTransformed[1] });
  items[5] = callback(arg1(dependencyMap[4]).Path, { d: "M7 14H4v1h3v-1Z", fill: secondaryColorsTransformed[0] });
  items[6] = callback(arg1(dependencyMap[4]).Path, {});
  items[7] = callback(arg1(dependencyMap[4]).Path, { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: secondaryColorsTransformed[1] });
  items[8] = callback(arg1(dependencyMap[4]).Path, {});
  items[9] = callback(arg1(dependencyMap[4]).Path, { d: "M2 5H1v2h1V5ZM6 5H5v2h1V5Z", fill: secondaryColorsTransformed[2] });
  items[10] = callback(arg1(dependencyMap[4]).Path, { d: "M5 3H4v2h1V3Z", fill: secondaryColorsTransformed[0] });
  items[11] = callback(arg1(dependencyMap[4]).Path, {});
  items[12] = callback(arg1(dependencyMap[4]).Path, { d: "M4 2H3v1h1V2Z", fill: secondaryColorsTransformed[2] });
  items[13] = callback(arg1(dependencyMap[4]).Path, { d: "M6 2H5v1h1V2ZM9 4H8v2h1V4ZM10 3H9v1h1V3ZM5 11H4v1h1v-1ZM4 13H3v1h1v-1ZM3 11H2v2h1v-2ZM8 13v-1H7v-1H6v2h1v1h4v-1H8ZM9 10H8v1h1v-1Z", fill: secondaryColorsTransformed[0] });
  const obj10 = { d: "M10 13v-1H9v-2H8V6h1V4h1V3H7v1H6v3H5v4h1v2h1v1h4v-1h-1Z", fill: "url(#" + memo + ")" };
  items[14] = callback(arg1(dependencyMap[4]).Path, obj10);
  items[15] = callback(arg1(dependencyMap[4]).Path, { d: "M14 12v-1h-1V9h-1V7h1V5h1V4h-3v1h-1v1H9v4h1v2h1v1h4v-1h-1Z", fill: primaryColorsTransformed[1] });
  items[16] = callback(arg1(dependencyMap[4]).Path, { d: "M13 5h-1v2h1V5ZM14 4h-1v1h1V4ZM13 9h-1v1h1V9ZM12 12v-1h-2v1h1v1h4v-1h-3Z", fill: primaryColorsTransformed[0] });
  items[17] = callback(arg1(dependencyMap[4]).Path, { d: "M3 3H2v1h1V3ZM3 7H2v1h1V7ZM7 3H6v1h1V3Z", fill: secondaryColorsTransformed[2] });
  items[18] = callback(arg1(dependencyMap[4]).Path, { d: "M11 4h-1v1h1V4ZM10 6H9v1h1V6Z", fill: primaryColorsTransformed[2] });
  items[19] = callback(arg1(dependencyMap[4]).Path, {});
  const obj15 = {};
  const obj16 = { id: memo };
  const items1 = [callback(arg1(dependencyMap[4]).Stop, { stopColor: primaryColorsTransformed[1], offset: "30%" }), callback(arg1(dependencyMap[4]).Stop, { stopColor: secondaryColorsTransformed[1], offset: "70%" })];
  obj16.children = items1;
  obj15.children = callback2(arg1(dependencyMap[4]).RadialGradient, obj16);
  items[20] = callback(arg1(dependencyMap[4]).Defs, obj15);
  obj["children"] = items;
  return callback2(arg1(dependencyMap[4]).Svg, obj);
};
