// Module ID: 10333
// Function ID: 10334
// Name: showSafetyToast
// Dependencies: [3956, 8349, 8350, 2]
// Exports: showSafetyToast

// Module 10333 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3956);
  obj = { key: id, icon: importDefault(8349), IconComponent: require(8350) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
