// Module ID: 10397
// Function ID: 10398
// Name: showSafetyToast
// Dependencies: [4021, 10237, 10238, 2]
// Exports: showSafetyToast

// Module 10397 (showSafetyToast)
const result = require("ShieldIcon").fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(4021);
  obj = { key: id, icon: importDefault(10237), IconComponent: require(10238) /* ShieldIcon */.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
