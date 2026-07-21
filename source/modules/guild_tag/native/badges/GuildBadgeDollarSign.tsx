// Module ID: 12834
// Function ID: 98173
// Name: items
// Dependencies: []
// Exports: GuildBadgeDollarSign

// Module 12834 (items)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = [null, null];
let closure_5 = ["#7E1B1B", "#C7531A"];
const items = [{}, { "Null": "Array", "Null": "isArray" }];
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeDollarSign.tsx");

export const GuildBadgeDollarSign = function GuildBadgeDollarSign(primaryTintColor) {
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
  const items = [callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), callback(arg1(dependencyMap[3]).Path, {}), , , , , , , , , , , , , , , , , , , , , ];
  obj1 = { d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z", fill: primaryColorsTransformed[1] };
  items[3] = callback(arg1(dependencyMap[3]).Path, obj1);
  items[4] = callback(arg1(dependencyMap[3]).Path, {});
  items[5] = callback(arg1(dependencyMap[3]).Path, {});
  items[6] = callback(arg1(dependencyMap[3]).Path, {});
  items[7] = callback(arg1(dependencyMap[3]).Path, {});
  items[8] = callback(arg1(dependencyMap[3]).Path, {});
  items[9] = callback(arg1(dependencyMap[3]).Path, {});
  items[10] = callback(arg1(dependencyMap[3]).Path, { d: "M8 5H7V6H8V5Z", fill: primaryColorsTransformed[0] });
  items[11] = callback(arg1(dependencyMap[3]).Path, { d: "M7 10H6V11H7V10Z", fill: primaryColorsTransformed[0] });
  items[12] = callback(arg1(dependencyMap[3]).Path, { d: "M6 9H5V10H6V9Z", fill: primaryColorsTransformed[0] });
  items[13] = callback(arg1(dependencyMap[3]).Path, { d: "M9 6H8V7H9V6Z", fill: primaryColorsTransformed[0] });
  items[14] = callback(arg1(dependencyMap[3]).Path, {});
  items[15] = callback(arg1(dependencyMap[3]).Path, {});
  items[16] = callback(arg1(dependencyMap[3]).Path, {});
  items[17] = callback(arg1(dependencyMap[3]).Path, { d: "M13 3V7H15V3H13Z", fill: primaryColorsTransformed[0] });
  items[18] = callback(arg1(dependencyMap[3]).Path, { d: "M9 1V3H11V1L9 1Z", fill: primaryColorsTransformed[0] });
  items[19] = callback(arg1(dependencyMap[3]).Path, { d: "M9 13V15H11V13H9Z", fill: primaryColorsTransformed[0] });
  items[20] = callback(arg1(dependencyMap[3]).Path, { d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z", fill: primaryColorsTransformed[0] });
  items[21] = callback(arg1(dependencyMap[3]).Path, {});
  items[22] = callback(arg1(dependencyMap[3]).Path, {});
  items[23] = callback(arg1(dependencyMap[3]).Path, {});
  obj["children"] = items;
  return callback2(arg1(dependencyMap[3]).Svg, obj);
};
