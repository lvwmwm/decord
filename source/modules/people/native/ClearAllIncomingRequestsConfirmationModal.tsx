// Module ID: 9185
// Function ID: 9186
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4507, 9186, 1988, 2]
// Exports: default

// Module 9185 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4507);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(9186, dependencyMap.paths), obj);
};
