// Module ID: 8900
// Function ID: 70282
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4372, 8901, 1935, 2]
// Exports: default

// Module 8900 (openClearAllIncomingRequestsConfirmationModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4372);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(8901, dependencyMap.paths), obj);
};
