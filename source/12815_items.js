// Module ID: 12815
// Function ID: 98107
// Name: items
// Dependencies: []
// Exports: GuildBadgeWind

// Module 12815 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = ["<string:1205010434>", "<string:2586968066>", "<string:2576980377>"];
let closure_5 = [true, true, true];
let closure_6 = [-26815615859885490000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -11586409197264133000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -4310085580902.281];
const items = [{ GameplayAbstractUI: "<string:16777735>", cwd: "<string:37775937>" }, { GameplayAbstractUI: "innocent", cwd: "innocent" }, {}, {}];
let closure_8 = ["trackUserProfileEditSaved", "UNDELETABLE", "HEADER_HANDLE_HEIGHT"];
const items1 = [{ GameplayAbstractUI: "\u{1F4A0}", cwd: 6 }, { GameplayAbstractUI: "innocent", cwd: "innocent" }, {}];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeWind.tsx");

export const GuildBadgeWind = function GuildBadgeWind(width) {
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
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items, secondaryBaseColors: closure_5, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj1.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { d: "M14 4V3h-2V1H8v1H7v1H6V2H3v1H2v4H1v3h1V9h1V8h5V6h1V5h5v1h1V4h-1Z", fill: primaryColorsTransformed[1] };
  const items = [callback(arg1(dependencyMap[3]).Path, obj1), callback(arg1(dependencyMap[3]).Path, { d: "M9 6v1H8v2h1v2h2v1h3v-1h1V6H9Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M4 10v4h1v1h3v-1h1v-4H4Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M8 14H5v1h3v-1ZM14 11h-3v1h3v-1ZM15 10h-1v1h1v-1ZM9 13H8v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M9 7H8v1h1V7ZM11 8h-1v1h1V8ZM14 6H9v1h5V6Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M9 5H8v1h1V5Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M6 2H3v1h3V2ZM7 3H6v1h1V3ZM4 5H3v1h1V5ZM2 7H1v1h1V7ZM3 3H2v1h1V3Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M8 2H7v1h1V2ZM12 1H8v1h4V1Z", fill: primaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M14 4V3h-1v1H9v1h5v1h1V4h-1Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M5 11H4v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M7 6v1H3v1h5V6H7Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, { d: "M3 8H2v1h1V8ZM2 9H1v1h1V9Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M3 9v1H2v1H1v4h1v-1h1v-3h1v-1h4V9H3Z", fill: secondaryColorsTransformed[1] }), callback(arg1(dependencyMap[3]).Path, { d: "M3 10H2v1h1v-1ZM2 11H1v1h1v-1Z", fill: secondaryColorsTransformed[2] }), callback(arg1(dependencyMap[3]).Path, { d: "M3 13H2v1h1v-1ZM2 14H1v1h1v-1Z", fill: secondaryColorsTransformed[0] }), callback(arg1(dependencyMap[3]).Path, { d: "M8 9H3v1h5V9Z", fill: secondaryColorsTransformed[2] })];
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
