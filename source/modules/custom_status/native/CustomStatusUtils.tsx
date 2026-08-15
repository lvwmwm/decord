// Module ID: 9290
// Function ID: 9291
// Name: openEditCustomStatusModal
// Dependencies: [5260, 9291, 2007, 2]
// Exports: openEditCustomStatusModal

// Module 9290 (openEditCustomStatusModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = importDefault(5260);
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9291, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
