// Module ID: 8929
// Function ID: 70436
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4337, 8930, 1934, 2]
// Exports: default

// Module 8929 (openClearAllIncomingRequestsConfirmationModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4337);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(8930, dependencyMap.paths), obj);
};
