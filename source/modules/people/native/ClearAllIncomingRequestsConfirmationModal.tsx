// Module ID: 8968
// Function ID: 70651
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4337, 8969, 1934, 2]
// Exports: default

// Module 8968 (openClearAllIncomingRequestsConfirmationModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4337);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(8969, dependencyMap.paths), obj);
};
