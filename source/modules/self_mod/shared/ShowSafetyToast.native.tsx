// Module ID: 10352
// Function ID: 10353
// Name: showSafetyToast
// Dependencies: [4062, 10318, 10319, 2]
// Exports: showSafetyToast

// Module 10352 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4062);
  obj = { key: id, icon: importDefault(10318), IconComponent: require(10319) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
