// Module ID: 11886
// Function ID: 92015
// Name: openEditCustomStatusModal
// Dependencies: []
// Exports: openEditCustomStatusModal

// Module 11886 (openEditCustomStatusModal)
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
