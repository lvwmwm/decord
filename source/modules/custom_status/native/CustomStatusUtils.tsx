// Module ID: 9372
// Function ID: 9373
// Name: openEditCustomStatusModal
// Dependencies: [4490, 9373, 1959, 2]
// Exports: openEditCustomStatusModal

// Module 9372 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4490);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9373, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
