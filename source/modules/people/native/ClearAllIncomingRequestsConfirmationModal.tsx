// Module ID: 9167
// Function ID: 9168
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4490, 9168, 1959, 2]
// Exports: default

// Module 9167 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4490);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9168, dependencyMap.paths), obj);
};
