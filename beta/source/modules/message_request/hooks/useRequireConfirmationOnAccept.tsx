// Module ID: 14017
// Function ID: 14018
// Name: useRequireConfirmationOnAccept
// Dependencies: [14018, 2]
// Exports: default

// Module 14017 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 14018 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
