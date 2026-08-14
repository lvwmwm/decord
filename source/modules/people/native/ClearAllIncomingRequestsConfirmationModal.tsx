// Module ID: 9313
// Function ID: 9314
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4572, 9314, 2007, 2]
// Exports: default

// Module 9313 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4572);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9314, dependencyMap.paths), obj);
};
