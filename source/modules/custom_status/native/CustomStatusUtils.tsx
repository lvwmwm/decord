// Module ID: 11946
// Function ID: 92300
// Name: openEditCustomStatusModal
// Dependencies: [4372, 11947, 1935, 2]
// Exports: openEditCustomStatusModal

// Module 11946 (openEditCustomStatusModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4372);
  obj = { analyticsLocations, prompt: _prompt };
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(11947, dependencyMap.paths), obj, undefined, obj);
};
