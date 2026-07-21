// Module ID: 10147
// Function ID: 78472
// Name: showSafetyToast
// Dependencies: []
// Exports: showSafetyToast

// Module 10147 (showSafetyToast)
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
