// Module ID: 10177
// Function ID: 10178
// Name: showSafetyToast
// Dependencies: [3890, 9025, 9024, 2]
// Exports: showSafetyToast

// Module 10177 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3890);
  obj = { key: id, icon: importDefault(9025), IconComponent: require(9024) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
