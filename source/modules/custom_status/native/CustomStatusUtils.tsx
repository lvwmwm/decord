// Module ID: 9454
// Function ID: 9455
// Name: openEditCustomStatusModal
// Dependencies: [4509, 9455, 1988, 2]
// Exports: openEditCustomStatusModal

// Module 9454 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4509);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(9455, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
