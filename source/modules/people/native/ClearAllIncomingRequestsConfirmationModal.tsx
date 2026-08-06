// Module ID: 9168
// Function ID: 9169
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4490, 9169, 1988, 2]
// Exports: default

// Module 9168 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4490);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(9169, dependencyMap.paths), obj);
};
