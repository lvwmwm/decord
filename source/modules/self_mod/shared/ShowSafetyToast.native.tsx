// Module ID: 10278
// Function ID: 10279
// Name: showSafetyToast
// Dependencies: [3956, 10118, 10119, 2]
// Exports: showSafetyToast

// Module 10278 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3956);
  obj = { key: id, icon: importDefault(10118), IconComponent: require(10119) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
