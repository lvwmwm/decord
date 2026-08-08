// Module ID: 9249
// Function ID: 9250
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4509, 9250, 1988, 2]
// Exports: default

// Module 9249 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4509);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(9250, dependencyMap.paths), obj);
};
