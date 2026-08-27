// Module ID: 8986
// Function ID: 8987
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4676, 8987, 2009, 2]
// Exports: default

// Module 8986 (openClearAllIncomingRequestsConfirmationModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4676;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(8987, dependencyMap.paths), obj);
};
