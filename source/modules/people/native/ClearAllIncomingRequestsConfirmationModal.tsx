// Module ID: 9299
// Function ID: 9300
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4550, 9300, 2007, 2]
// Exports: default

// Module 9299 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(4550);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9300, dependencyMap.paths), obj);
};
