// Module ID: 9295
// Function ID: 9296
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4549, 9296, 2007, 2]
// Exports: default

// Module 9295 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4549);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9296, dependencyMap.paths), obj);
};
