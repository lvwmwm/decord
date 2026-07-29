// Module ID: 8924
// Function ID: 8925
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4395, 8925, 1959, 2]
// Exports: default

// Module 8924 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4395);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(8925, dependencyMap.paths), obj);
};
