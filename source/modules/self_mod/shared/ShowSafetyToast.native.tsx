// Module ID: 10141
// Function ID: 78454
// Name: showSafetyToast
// Dependencies: []
// Exports: showSafetyToast

// Module 10141 (showSafetyToast)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  let obj = importDefault(dependencyMap[0]);
  obj = { key: id, icon: importDefault(dependencyMap[1]), IconComponent: require(dependencyMap[2]).ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
