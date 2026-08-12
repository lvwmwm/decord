// Module ID: 10438
// Function ID: 10439
// Name: showSafetyToast
// Dependencies: [4062, 10278, 10279, 2]
// Exports: showSafetyToast

// Module 10438 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4062);
  obj = { key: id, icon: importDefault(10278), IconComponent: require(10279) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
