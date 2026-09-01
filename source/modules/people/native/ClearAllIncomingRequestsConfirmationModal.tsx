// Module ID: 9065
// Function ID: 9066
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4723, 9066, 2009, 2]
// Exports: default

// Module 9065 (openClearAllIncomingRequestsConfirmationModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4723;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(9066, dependencyMap.paths), obj);
};
