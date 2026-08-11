// Module ID: 9255
// Function ID: 9256
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4509, 9256, 2007, 2]
// Exports: default

// Module 9255 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4509);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9256, dependencyMap.paths), obj);
};
