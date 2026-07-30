// Module ID: 11964
// Function ID: 11965
// Name: openEditCustomStatusModal
// Dependencies: [4395, 11965, 1959, 2]
// Exports: openEditCustomStatusModal

// Module 11964 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4395);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(11965, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
