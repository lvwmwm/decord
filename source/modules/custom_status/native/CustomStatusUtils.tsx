// Module ID: 9517
// Function ID: 9518
// Name: openEditCustomStatusModal
// Dependencies: [4572, 9518, 2007, 2]
// Exports: openEditCustomStatusModal

// Module 9517 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(4572);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9518, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
