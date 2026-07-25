// Module ID: 10120
// Function ID: 78360
// Name: showSafetyToast
// Dependencies: [3832, 8961, 8960, 2]
// Exports: showSafetyToast

// Module 10120 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3832);
  obj = { key: id, icon: importDefault(8961), IconComponent: require(8960) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
