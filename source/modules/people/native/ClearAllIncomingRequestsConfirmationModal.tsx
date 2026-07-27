// Module ID: 8856
// Function ID: 70131
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4338, 8857, 1935, 2]
// Exports: default

// Module 8856 (openClearAllIncomingRequestsConfirmationModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4338);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(8857, dependencyMap.paths), obj);
};
