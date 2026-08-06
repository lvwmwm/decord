// Module ID: 10309
// Function ID: 10310
// Name: showSafetyToast
// Dependencies: [3985, 10149, 10150, 2]
// Exports: showSafetyToast

// Module 10309 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3985);
  obj = { key: id, icon: importDefault(10149), IconComponent: require(10150) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
