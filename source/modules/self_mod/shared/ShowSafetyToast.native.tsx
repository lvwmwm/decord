// Module ID: 10188
// Function ID: 78730
// Name: showSafetyToast
// Dependencies: [3831, 8216, 8217, 2]
// Exports: showSafetyToast

// Module 10188 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3831);
  obj = { key: id, icon: importDefault(8216), IconComponent: require(8217) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
