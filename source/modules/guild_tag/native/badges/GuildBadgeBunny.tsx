// Module ID: 12825
// Function ID: 98154
// Name: items
// Dependencies: []
// Exports: GuildBadgeBunny

// Module 12825 (items)
let closure_2 = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = [null, null];
let closure_6 = [true, true];
const items = [{ "Null": "r", "Null": "NATIVE_REQUIRED_ASSETS_ICONS" }, { "Null": "Array", "Null": "isArray" }];
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBunny.tsx");

export const GuildBadgeBunny = function GuildBadgeBunny(primaryTintColor) {
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
  const memo = React.useMemo(() => "badge-bunny-clip-" + callback(closure_1[2]).v4(), []);
  let obj1 = arg1(dependencyMap[3]);
  obj = { primaryBaseColors: closure_5, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_6, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj1.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 16 16";
  obj["fill"] = "none";
  obj1 = { clipPath: "url(#" + memo + ")" };
  const items = [callback(arg1(dependencyMap[4]).Path, { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] }), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[4]).Path, { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, {}), callback(arg1(dependencyMap[4]).Path, { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] }), callback(arg1(dependencyMap[4]).Path, { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] })];
  obj1.children = items;
  const items1 = [callback2(arg1(dependencyMap[4]).G, obj1), ];
  const obj7 = {};
  const obj8 = { id: memo, children: callback(arg1(dependencyMap[4]).Rect, { fillRule: "shapes", transform: "Array", type: "isArray" }) };
  obj7.children = callback(arg1(dependencyMap[4]).ClipPath, obj8);
  items1[1] = callback(arg1(dependencyMap[4]).Defs, obj7);
  obj["children"] = items1;
  return callback2(arg1(dependencyMap[4]).Svg, obj);
};
