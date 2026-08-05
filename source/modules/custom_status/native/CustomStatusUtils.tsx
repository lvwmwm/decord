// Module ID: 9343
// Function ID: 9344
// Name: openEditCustomStatusModal
// Dependencies: [4460, 9344, 1959, 2]
// Exports: openEditCustomStatusModal

// Module 9343 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4460);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9344, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
