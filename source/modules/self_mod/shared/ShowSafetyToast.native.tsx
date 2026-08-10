// Module ID: 10392
// Function ID: 10393
// Name: showSafetyToast
// Dependencies: [4002, 10232, 10233, 2]
// Exports: showSafetyToast

// Module 10392 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4002);
  obj = { key: id, icon: importDefault(10232), IconComponent: require(10233) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
