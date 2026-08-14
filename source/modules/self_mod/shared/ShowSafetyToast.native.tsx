// Module ID: 10366
// Function ID: 10367
// Name: showSafetyToast
// Dependencies: [4062, 10332, 10333, 2]
// Exports: showSafetyToast

// Module 10366 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4062);
  obj = { key: id, icon: importDefault(10332), IconComponent: require(10333) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
