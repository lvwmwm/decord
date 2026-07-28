// Module ID: 10160
// Function ID: 78490
// Name: showSafetyToast
// Dependencies: [3866, 9005, 9004, 2]
// Exports: showSafetyToast

// Module 10160 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3866);
  obj = { key: id, icon: importDefault(9005), IconComponent: require(9004) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
