// Module ID: 8933
// Function ID: 8934
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4399, 8934, 1959, 2]
// Exports: default

// Module 8933 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4399);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(8934, dependencyMap.paths), obj);
};
