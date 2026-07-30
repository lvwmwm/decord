// Module ID: 8920
// Function ID: 8921
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4395, 8921, 1959, 2]
// Exports: default

// Module 8920 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4395);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(8921, dependencyMap.paths), obj);
};
