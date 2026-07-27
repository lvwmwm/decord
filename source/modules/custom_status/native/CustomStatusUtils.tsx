// Module ID: 11903
// Function ID: 92130
// Name: openEditCustomStatusModal
// Dependencies: [4338, 11904, 1935, 2]
// Exports: openEditCustomStatusModal

// Module 11903 (openEditCustomStatusModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4338);
  obj = { analyticsLocations, prompt: _prompt };
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(11904, dependencyMap.paths), obj, undefined, obj);
};
