// Module ID: 9079
// Function ID: 9080
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4723, 9080, 2008, 2]
// Exports: default

// Module 9079 (openClearAllIncomingRequestsConfirmationModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4723;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(9080, dependencyMap.paths), obj);
};
