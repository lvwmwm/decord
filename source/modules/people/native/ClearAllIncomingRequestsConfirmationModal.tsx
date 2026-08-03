// Module ID: 9110
// Function ID: 9111
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4461, 9111, 1959, 2]
// Exports: default

// Module 9110 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4461);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9111, dependencyMap.paths), obj);
};
