// Module ID: 9504
// Function ID: 9505
// Name: openEditCustomStatusModal
// Dependencies: [4550, 9505, 2007, 2]
// Exports: openEditCustomStatusModal

// Module 9504 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4550);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9505, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
