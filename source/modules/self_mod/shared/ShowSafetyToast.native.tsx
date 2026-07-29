// Module ID: 10181
// Function ID: 10182
// Name: showSafetyToast
// Dependencies: [3890, 9029, 9028, 2]
// Exports: showSafetyToast

// Module 10181 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3890);
  obj = { key: id, icon: importDefault(9029), IconComponent: require(9028) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
