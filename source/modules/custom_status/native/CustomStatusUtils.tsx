// Module ID: 11899
// Function ID: 92082
// Name: openEditCustomStatusModal
// Dependencies: [4337, 11900, 1934, 2]
// Exports: openEditCustomStatusModal

// Module 11899 (openEditCustomStatusModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4337);
  obj = { analyticsLocations, prompt: _prompt };
  obj = { presentation: "modal" };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(11900, dependencyMap.paths), obj, undefined, obj);
};
