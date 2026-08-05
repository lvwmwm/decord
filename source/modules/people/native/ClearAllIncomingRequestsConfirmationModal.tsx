// Module ID: 9139
// Function ID: 9140
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4460, 9140, 1959, 2]
// Exports: default

// Module 9139 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4460);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9140, dependencyMap.paths), obj);
};
