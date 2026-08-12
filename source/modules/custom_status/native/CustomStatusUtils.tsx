// Module ID: 9500
// Function ID: 9501
// Name: openEditCustomStatusModal
// Dependencies: [4549, 9501, 2007, 2]
// Exports: openEditCustomStatusModal

// Module 9500 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4549);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9501, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
