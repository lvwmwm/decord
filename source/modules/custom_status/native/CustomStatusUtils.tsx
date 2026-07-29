// Module ID: 11970
// Function ID: 11971
// Name: openEditCustomStatusModal
// Dependencies: [4395, 11971, 1959, 2]
// Exports: openEditCustomStatusModal

// Module 11970 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4395);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(11971, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
