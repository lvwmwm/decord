// Module ID: 11902
// Function ID: 92125
// Name: openEditCustomStatusModal
// Dependencies: [4338, 11903, 1935, 2]
// Exports: openEditCustomStatusModal

// Module 11902 (openEditCustomStatusModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4338);
  obj = { analyticsLocations, prompt: _prompt };
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(11903, dependencyMap.paths), obj, undefined, obj);
};
