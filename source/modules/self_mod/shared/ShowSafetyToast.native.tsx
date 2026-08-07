// Module ID: 10325
// Function ID: 10326
// Name: showSafetyToast
// Dependencies: [4002, 10165, 10166, 2]
// Exports: showSafetyToast

// Module 10325 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4002);
  obj = { key: id, icon: importDefault(10165), IconComponent: require(10166) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
