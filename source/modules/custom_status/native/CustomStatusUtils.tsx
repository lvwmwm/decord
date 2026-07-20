// Module ID: 11879
// Function ID: 91980
// Name: openEditCustomStatusModal
// Dependencies: []
// Exports: openEditCustomStatusModal

// Module 11879 (openEditCustomStatusModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(dependencyMap[0]);
  obj = { analyticsLocations, prompt: _prompt };
  obj = { presentation: "modal" };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, undefined, obj);
};
