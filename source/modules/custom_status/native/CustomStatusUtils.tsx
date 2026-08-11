// Module ID: 9460
// Function ID: 9461
// Name: openEditCustomStatusModal
// Dependencies: [4509, 9461, 2007, 2]
// Exports: openEditCustomStatusModal

// Module 9460 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4509);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9461, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
