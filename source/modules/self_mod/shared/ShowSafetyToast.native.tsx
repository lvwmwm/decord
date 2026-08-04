// Module ID: 10306
// Function ID: 10307
// Name: showSafetyToast
// Dependencies: [3986, 10147, 10148, 2]
// Exports: showSafetyToast

// Module 10306 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(3986);
  obj = { key: id, icon: importDefault(10147), IconComponent: require(10148) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
