// Module ID: 10391
// Function ID: 10392
// Name: showSafetyToast
// Dependencies: [4002, 10231, 10232, 2]
// Exports: showSafetyToast

// Module 10391 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4002);
  obj = { key: id, icon: importDefault(10231), IconComponent: require(10232) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
