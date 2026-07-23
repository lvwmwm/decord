// Module ID: 10156
// Function ID: 78536
// Name: showSafetyToast
// Dependencies: [3831, 8172, 8173, 2]
// Exports: showSafetyToast

// Module 10156 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3831);
  obj = { key: id, icon: importDefault(8172), IconComponent: require(8173) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
