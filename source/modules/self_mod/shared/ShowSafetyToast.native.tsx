// Module ID: 10194
// Function ID: 10195
// Name: showSafetyToast
// Dependencies: [3894, 9038, 9037, 2]
// Exports: showSafetyToast

// Module 10194 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3894);
  obj = { key: id, icon: importDefault(9038), IconComponent: require(9037) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
