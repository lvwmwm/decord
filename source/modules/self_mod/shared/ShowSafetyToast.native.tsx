// Module ID: 10623
// Function ID: 10624
// Name: showSafetyToast
// Dependencies: [4094, 9835, 9834, 2]
// Exports: showSafetyToast

// Module 10623 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4094);
  obj = { key: id, icon: importDefault(9835), IconComponent: require(9834) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
